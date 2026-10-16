from pathlib import Path
import re,json,hashlib
base=Path(__file__).parent
ids=['def-p-norms-on-rn','thm-sequential-criterion-for-continuity','def-norm-and-normed-space','thm-arithmetic-and-lattice-operations-preserve-measurability','def-metric-bounded-diameter','def-positive-and-negative-parts-of-a-function']
for folder in ['before/items','proposed/items']: (base/folder).mkdir(parents=True,exist_ok=True)
for id in ids:
 raw=Path('items',id+'.md').read_bytes();(base/'before/items'/f'{id}.md').write_bytes(raw)
 # These are proposed carriers, not a claim that historical verification covers new bytes.
 s=re.sub(r'^verification:\n(?:[ \t].*\n)*','',raw.decode(),flags=re.M)
 (base/'proposed/items'/f'{id}.md').write_text(s)
def edit(id,fn):
 p=base/'proposed/items'/f'{id}.md';p.write_text(fn(p.read_text()))
def remdep(s,id):return s.replace(id+', ','').replace(', '+id,'')
edit('def-p-norms-on-rn',lambda s:re.sub(r'\*\*The exponent is a rational, and that is not a matter of taste\.\*\*.*?(?=\n### The maximum norm)',r'''**The exponent is rational in this definition.**
[[def-rational-power]] supplies the nonnegative-base powers used here, and
[[thm-minkowski-finite]] supplies the corresponding triangle inequality for
rational $p \\ge 1$. This item makes no claim with $p$ ranging over a real
interval; its rational domain is unchanged.
''',remdep(s,'rem-real-exponents-deferred'),flags=re.S))
edit('thm-sequential-criterion-for-continuity',lambda s:remdep(s,'rem-heine-criterion-choice-cost').replace("theorem's converse direction. What this library does and does not claim about\nthat cost is recorded once, in [[rem-heine-criterion-choice-cost]], and is not\nrestated here.","theorem's converse direction. This is a statement about the proof given here,\nnot a claim that countable choice is necessary.").replace("No claim is made that it is necessary; [[rem-heine-criterion-choice-cost]] states in full what this library does and does not assert, including Sierpiński's ZF theorem that a function continuous sequentially at *every* point of $\\mathbb{R}$ is continuous, which shows the everywhere-statement and the pointwise statement behave differently.","No claim is made that countable choice is necessary. The exact inherited use is the selection of one point from each shrinking nonempty set in step 3.2 of that supplier; no stronger choice principle is invoked."))
edit('def-norm-and-normed-space',lambda s:remdep(s,'rem-metric-axiom-conventions').replace('This is the same convention [[rem-metric-axiom-conventions]]\nrecords for metrics.','The same real-valued codomain is required of a metric by\n[[def-metric-space]].').replace('The situation is exactly the one [[rem-metric-axiom-conventions]]\n  describes for (M1) and the pseudometric.','The analogous weakening in [[def-metric-space]] retains symmetry and the\n  triangle inequality but replaces separation by $p(x,x)=0$; that defines a\n  pseudometric.'))
edit('def-metric-bounded-diameter',lambda s:remdep(s,'rem-sup-conventions').replace('the extended real line is introduced on a later page and is\nnot used for the suprema and infima taken here, and no convention\n$\\sup \\emptyset = -\\infty$ is in force in this development\n([[rem-sup-conventions]]).','the least-upper-bound property of [[def-complete-ordered-field]] and the\ngreatest-lower-bound property of [[thm-infimum-property]] apply to nonempty\nreal sets with the respective bounds. Empty or unbounded sets acquire no\nreal supremum or infimum by convention.'))
edit('def-positive-and-negative-parts-of-a-function',lambda s:s.replace('Pointwise, both functions take values in $[0,+\\infty]$, and one has\n\n$$f = f^+ - f^-,\\qquad |f| = f^+ + f^-.$$\n\nAt each point at least one of $f^+$ and $f^-$ is zero.',r'''All maxima, negations, and sums here are pointwise, using the total order,
reflection and partial addition of [[def-extended-reals]]. Both parts take
values in $[0,+\infty]$. For an extended-real-valued function, define the
**magnitude function** by $|f|(x):=\max\{f(x),-f(x)\}$. This is function notation;
it does not introduce an absolute-value operation into the scalar arithmetic of
that item. Likewise the notation $f^+-f^-$ below abbreviates the pointwise sum
$f^++(-f^-)$, whose definedness is verified here.

At each point at least one of $f^+$ and $f^-$ is zero. If $f(x)\ge0$, then
$f^+(x)=f(x)$ and $f^-(x)=0$; if $f(x)\le0$, then $f^+(x)=0$ and
$f^-(x)=-f(x)$. These cases include both infinite values and show that the
following sums are defined and satisfy

$$f=f^++(-f^-),\qquad |f|=f^++f^-.$$

Thus the familiar notation $f=f^+-f^-$ retains exactly these pointwise values;
no subtraction of two infinite nonzero values occurs.'''))
