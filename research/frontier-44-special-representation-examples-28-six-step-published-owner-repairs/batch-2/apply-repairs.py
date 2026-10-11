from pathlib import Path
import re
root=Path('research/frontier-44-special-representation-examples-28-six-step-published-owner-repairs/batch-2')
ids=['thm-schroder-bernstein','thm-n-cross-n-countable','def-dependent-choice','thm-countable-union-of-countable']
for id in ids:
 p=Path('items')/(id+'.md'); s=p.read_text()
 assert p.read_bytes()==(root/'before'/(id+'.md')).read_bytes(),id+' changed since before preservation'
 if id!='def-dependent-choice':
  s=re.sub(r'^  (verified|judge|audited):[^\n]*\n(?:^    .*\n)*','',s,flags=re.M)
 if id=='thm-schroder-bernstein':
  s=s.replace('justified_by: []','justified_by: []\nforward_refs: [thm-cardinal-comparability-iff-ac]')
  s=s.replace('the Axiom of Choice ([[def-axiom-of-choice]]), a classical result quoted here and proved nowhere on this page, the harder half of it going back to Hartogs.','the Axiom of Choice, as proved later in [[thm-cardinal-comparability-iff-ac]] using Hartogs\' theorem. This is an orientation reference, not an assumption of the present theorem.')
 elif id=='thm-n-cross-n-countable':
  s=s.replace('lem-nat-discrete]','lem-nat-discrete, thm-well-ordering-principle]',1)
  old=s[s.index('- The Cantor pairing polynomial'):]
  new=r'''- The Cantor pairing polynomial $(m,n) \mapsto \tfrac{(m+n)(m+n+1)}{2} + n$ is also a bijection, with a choice-free inverse. Here the half is a uniquely determined natural, as the following argument shows; no division-with-remainder theorem is needed.

  Define triangular numbers by $T_0=0$ and $T_{s+1}=T_s+(s+1)$ using recursion on the state $(s,T_s)$ ([[thm-recursion]]). Induction using the arithmetic laws in [L3] gives $T_s+T_s=s(s+1)$: the base is zero, and doubling the recurrence gives $s(s+1)+2(s+1)=(s+1)(s+2)$. Uniqueness of a natural half follows from the strict increase of doubling, proved in step 4.1. Also $T_{s+1}>T_s$, and induction gives $T_s\ge s$ (the increment $s+1$ is at least one), so these numbers are cofinal in $\mathbb N$.

  For $k\in\mathbb N$, take the least $r$ with $k<T_r$ ([[thm-well-ordering-principle]]); such $r$ exists since $T_{k+1}\ge k+1>k$. Since $T_0=0\le k$, write $r=s+1$. Minimality gives $T_s\le k<T_{s+1}$. Strict increase makes this block unique: two different blocks are disjoint by transitivity. There is a unique natural $n$ with $k=T_s+n$, by the definition of $\le$ and additive cancellation in [L4]. The inequality $k<T_s+(s+1)$ gives $n<s+1$, hence $n\le s$, so there is a unique natural $m$ with $m+n=s$. This yields the unique pair with $k=T_{m+n}+n$. Conversely, every pair $(m,n)$ has $n\le m+n$, hence its value lies in that block and is recovered by this construction. Thus the polynomial is a bijection. All arithmetic and induction used here are the declared facts [L3], [L4] and [L6].
'''
  s=s.replace(old,new)
 elif id=='def-dependent-choice':
  s=s.replace('def-natural-numbers]','def-natural-numbers, def-cartesian-product, def-power-set, def-axiom-schema-of-separation, thm-induction-principle, lem-nat-order-is-membership]',1)
  s=s.replace('be taken as $a$. The reverse derivation is standard and is not needed anywhere in\nthis library, so it is not carried out; every use below prescribes $x_0$.',r'''be taken as $a$. Conversely, assume the start-free form, and fix $X$, $R$ and $a$ as above. Let $P$ be the set of all functions $p:k\to X$ with nonzero $k\in\mathbb N$, $p(0)=a$, and $p(i)\mathbin R p(i+1)$ whenever $i+1<k$. It is a set by Separation inside $\mathcal P(\mathbb N\times X)$ ([[def-power-set]], [[def-cartesian-product]], [[def-axiom-schema-of-separation]]); a natural is the set of its predecessors ([[lem-nat-order-is-membership]]). The singleton path $\{(0,a)\}$ lies in $P$.

On $P$ let $p\mathbin S q$ mean that $q$ extends $p$ by exactly one new last entry. This relation is entire: for one particular $p:k\to X$, write $k=j+1$; an $R$-successor $y$ of $p(j)$ exists, and $q=p\cup\{(k,y)\}$ is the required extension. This is existential instantiation for that path, not a simultaneous choice of successors. Start-free DC now supplies a sequence $(p_n)$ with $p_n\mathbin S p_{n+1}$; its first path need not be the singleton path, but every path in $P$ already starts at $a$.

Their graphs are nested. By induction ([[thm-induction-principle]]), $p_n$ has at least $n+1$ entries: the initial path is nonempty, and every step adds one entry. Hence $x=\bigcup_{n\in\mathbb N}p_n$ is a function with domain $\mathbb N$ and values in $X$. Indeed, nestedness makes all common values agree, every natural index eventually lies in a path, and no path has indices outside $\mathbb N$. Each path starts at $a$, so $x(0)=a$; for any $i$, a sufficiently long path contains both $i$ and $i+1$, giving $x(i)\mathbin R x(i+1)$. Replacement and Union form this union of the sequence of graphs. Thus the start-free and prescribed-start forms are equivalent in ZF. Every use below retains the prescribed-start convention.''')
 elif id=='thm-countable-union-of-countable':
  s=s.replace('justified_by: []','justified_by: []\nforward_refs: [cor-relative-consistency-of-feferman-levy-choice-failures-over-zf, thm-r-uncountable]')
  start=s.index('**The hypothesis $\\mathrm{AC}_\\omega$ is not decoration')
  end=s.index('\n## Facts & Assumptions',start)
  s=s[:start]+r'''**The role of $\mathrm{AC}_\omega$.** It is spent at exactly one step, step 3.1 below, where a surjection $\mathbb N\to A_n$ is selected simultaneously for each nonempty $A_n$. The individual countability hypotheses assert that these sets of surjections are nonempty; they specify no simultaneous selection.

Conditionally on $\operatorname{Con}(\mathrm{ZF})$, ZF alone does not prove the unrestricted countable-union assertion. The later [[cor-relative-consistency-of-feferman-levy-choice-failures-over-zf]] supplies a local finite-fragment proof of the relative consistency of ZF with the reals a countable union of countable sets. Combined with the choice-free uncountability theorem [[thm-r-uncountable]], this gives the indicated nonprovability: if ZF proved the union assertion, that consistent extension would prove that the reals are both at most countable and uncountable. These are later metatheoretic orientation references, not hypotheses of the union proof below; the consistency assumption is retained.
'''+s[end:]
 p.write_text(s)
