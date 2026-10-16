from pathlib import Path
import json,re,hashlib,yaml
R=Path('research/quantum-build-60-2026-10-15-owner/complex');plan=json.load(open('research/quantum-planning-review/prerequisite-repairs.json'))
def write_supplier(n,title,body):
 s=plan['proposed_suppliers'][n]; d={'id':s['id'],'kind':s['kind'],'title':title,'status':'draft','origin':'session','provenance':{'statement':'literature-derived','proof':'not-applicable' if s['kind']=='definition' else 'ai-generated'},'deps':s['deps'],'justified_by':[],'aliases':[]}
 if s['kind']!='definition':d['proof_strategy']='direct'
 d['sources']={'references':[{'title':'J. Lebl, Guide to Cultivating Complex Analysis' if n<3 else 'U. Lang, Differential Geometry I, Section 1.1','url':'https://www.jirka.org/ca/ca.pdf' if n<3 else 'https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf'}]}
 (R/'items'/f"{s['id']}.md").write_text('---\n'+yaml.safe_dump(d,sort_keys=False,allow_unicode=True)+'---\n\n'+body.strip()+'\n')
write_supplier(0,'The complex coordinate bijection is real linear',r'''
## Statement

For $\Phi(a+bi)=(a,b)$, all $z,w\in\mathbb C$ and $r\in\mathbb R$ satisfy $\Phi(z+w)=\Phi(z)+\Phi(w)$ and $\Phi(rz)=r\Phi(z)$. Here $r$ acts on $\mathbb C$ through its canonical real embedding. Thus $\Phi$ is a real-linear bijection, where the real operations on $\mathbb C$ are restriction of its field operations.

## Facts & Assumptions

**Given:** The coordinate map $\Phi$.

[F1] Coordinate form is unique; $\Phi$ is bijective and respects addition, with the displayed complex multiplication formula ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

[F2] The embedded real $r$ is $r+0i$ ([[def-complex-numbers-and-arithmetic]]).

## Proof

1.1 Write $z=a+bi$. Multiplying $r+0i$ by $a+bi$ gives $ra+(rb)i$, hence $\Phi(rz)=(ra,rb)=r\Phi(z)$ for every real $r$, including zero. [given, F1, F2, algebra]

1.2 Additivity and bijectivity are [F1]. Together with step 1.1 they prove real linearity and bijectivity, including the zero vector. [F1, step 1.1] ∎
''')
write_supplier(1,'The complex coordinate isometry transports topology and affine segments',r'''
## Statement

Equip $\mathbb C$ with $d_{\mathbb C}(z,w)=|z-w|$ and $\mathbb R^2$ with its Euclidean metric $d_2$. The coordinate bijection $\Phi(a+bi)=(a,b)$ is an isometry and a homeomorphism. For every real $t$,

$$\Phi((1-t)z+tw)=(1-t)\Phi(z)+t\Phi(w).$$

For every $A\subseteq\mathbb C$, its image is open, closed, bounded, compact, or connected exactly when $A$ is, in the indicated ambient spaces. Moreover

$$\Phi[\operatorname{int}_{\mathbb C}A]=\operatorname{int}_{\mathbb R^2}\Phi[A],\qquad \Phi[\overline A]=\overline{\Phi[A]},\qquad \Phi[\partial A]=\partial\Phi[A].$$

## Facts & Assumptions

**Given:** The spaces and coordinate map in the statement; all subsets have their restricted metrics and induced topologies.

[F1] $\Phi$ is bijective and real linear ([[thm-complex-numbers-are-the-real-coordinate-plane]], [[thm-complex-coordinate-map-preserves-real-scalar-multiplication]]).

[F2] $d_{\mathbb C}(z,w)=\|\Phi(z)-\Phi(w)\|_2$ ([[def-complex-metric-convergence-and-continuity]], [[def-p-norms-on-rn]]).

[F3] Balls, metric openness and the induced topology, isometry, homeomorphism, interior, closure and boundary have their usual defining contracts ([[def-metric-ball]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], [[def-isometry-and-metric-embedding]], [[def-homeomorphism-and-open-maps]], [[def-metric-interior-closure-boundary]]).

[F4] Boundedness means containment in a ball, with the empty set bounded; continuous images preserve compactness and connectedness ([[def-metric-bounded-diameter]], [[def-metric-compactness]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-continuous-image-of-a-connected-space]]).

## Proof

1.1 By [F1] and [F2], $\Phi$ is a bijective isometry and $\Phi[B_{\mathbb C}(z,r)]=B_2(\Phi(z),r)$ for every $r>0$. The same holds for its inverse. Ball neighborhoods therefore give continuity and openness in both directions: for an $\varepsilon$-ball choose the source $\varepsilon$-ball. Thus $\Phi$ is a homeomorphism. [given, F1, F2, F3]

1.2 Real linearity gives the affine identity by applying $\Phi$ separately to $(1-t)z$ and $tw$ and adding, for arbitrary real $t$. [F1, algebra]

2.1 A ball lies in $A$ exactly when its image ball lies in $\Phi[A]$; a ball meets $A$ exactly when its image ball meets $\Phi[A]$. The definitions of interior and closure yield their stated identities. Bijectivity preserves set difference, giving the boundary identity. Openness is equivalent to being the interior, and closedness transfers because complements of open sets correspond under the bijection. [step 1.1, F3]

2.2 Ball correspondence proves boundedness in both directions, also for the empty set. The restrictions of $\Phi$ and its inverse to $A$ and $\Phi[A]$ remain continuous for the induced structures. Apply the continuous-image compactness and connectedness theorems to these restrictions in both directions. This gives both remaining equivalences for every subset, including the empty subset. [step 1.1, F4] ∎
''')
write_supplier(2,'Real total derivatives transport through the complex coordinate isometry',r'''
## Statement

Let $U\subseteq\mathbb C$ be open in $d_{\mathbb C}$, $z\in U$, and $f:U\to\mathbb C$. Set $f_{\mathbb R}=\Phi\circ f\circ\Phi^{-1}:\Phi[U]\to\mathbb R^2$. A map $L:\mathbb C\to\mathbb C$ is called real linear here when it preserves addition and real scalar multiplication. Then $f_{\mathbb R}$ is totally differentiable at $\Phi(z)$ if and only if there is such an $L$ with

$$f(z+h)=f(z)+L(h)+r(h),\qquad \frac{|r(h)|}{|h|}\longrightarrow0$$

as $h\to0$, $h\ne0$, $z+h\in U$. In this case

$$Df_{\mathbb R}(\Phi(z))=\Phi\circ L\circ\Phi^{-1}.$$

We denote the transported map $L$ by $D_{\mathbb R}f(z)$ (or $Df(z)$ when real differentiation is explicit). It need not be complex linear.

## Facts & Assumptions

**Given:** $U,z,f$ and the indicated coordinate map.

[F1] $\Phi$ and its inverse are real linear isometries and $\Phi[U]$ is open ([[thm-complex-coordinate-isometry-and-topology-transport]], [[thm-complex-coordinate-map-preserves-real-scalar-multiplication]]).

[F2] Euclidean real linearity and total differentiation use the linear-remainder definitions ([[def-euclidean-linear-map]], [[def-total-derivative-in-euclidean-space]]).

## Proof

1.1 If $L$ is real linear, so is $A=\Phi L\Phi^{-1}$ by [F1]. With $k=\Phi(h)$, apply $\Phi$ to the displayed remainder identity: $f_{\mathbb R}(\Phi(z)+k)=f_{\mathbb R}(\Phi(z))+Ak+\Phi(r(h))$. Isometry gives $\|\Phi(r(h))\|_2/\|k\|_2=|r(h)|/|h|$. Thus the stated remainder limit is exactly the total derivative limit in [F2]. [given, F1, F2, algebra]

1.2 Conversely, if $A=Df_{\mathbb R}(\Phi(z))$, let $L=\Phi^{-1}A\Phi$. This is real linear. Apply $\Phi^{-1}$ to the Euclidean remainder identity. The same equality of norm quotients gives the required complex-valued remainder limit, proving the reverse implication and derivative formula. [F1, F2, step 1.1] ∎
''')
write_supplier(3,'Polygonal length and rectifiability of complex paths',r'''
## Definition

For $a\le b$, a **complex path** is a map $\gamma:[a,b]\to\mathbb C$ continuous from the usual real metric to $d_{\mathbb C}$ ([[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-metric-continuity]], [[def-complex-metric-convergence-and-continuity]]). Its parameter interval and parametrization are part of the path, not just its trace.

For $a<b$ and a partition $P=(t_0,\ldots,t_m)$ as in [[def-partition-and-refinement]], set

$$\ell_P^{\mathbb C}(\gamma)=\sum_{i<m}|\gamma(t_{i+1})-\gamma(t_i)|,\qquad L_{\mathbb C}(\gamma)=\sup_P\ell_P^{\mathbb C}(\gamma)\in[0,+\infty].$$

Every summand and hence every partition sum is a finite nonnegative real by the metric formula. There is at least one partition, $(a,b)$. The supremum is taken in the extended real line ([[def-extended-reals]], [[lem-extended-reals-complete]]). The path is **rectifiable** when the partition sums are bounded above by a real number; equivalently $L_{\mathbb C}(\gamma)<+\infty$. In that case the length is the nonnegative real least upper bound supplied by [[def-complete-ordered-field]]. Bounded trace alone is not the definition of rectifiability. Complex subtraction is that of [[def-complex-numbers-and-arithmetic]].

On a singleton interval $[a,a]$, set $L_{\mathbb C}(\gamma)=0$ and call every path rectifiable. No partition of a degenerate interval is invoked.
''')
write_supplier(4,'Complex path length equals coordinate length and piecewise speed integral',r'''
## Statement

For a continuous $\gamma:[a,b]\to\mathbb C$, $a\le b$, write $\Gamma=\Phi\circ\gamma=(x,y)$. Every complex polygonal sum equals the corresponding Euclidean polygonal sum of $\Gamma$, and

$$L_{\mathbb C}(\gamma)=L_{\mathbb R^2}(\Gamma).$$

Thus $\gamma$ is rectifiable exactly when both real functions $x$ and $y$ have bounded variation. If $\Gamma$ is continuous and piecewise $C^1$, meaning that on each piece $[t_j,t_{j+1}]$ its interior derivative has a continuous extension $(x'_j,y'_j)$ to the closed piece, then

$$L_{\mathbb C}(\gamma)=\sum_j\int_{t_j}^{t_{j+1}}\|\Gamma'_j(t)\|_2\,dt=\sum_j\int_{t_j}^{t_{j+1}}\sqrt{x'_j(t)^2+y'_j(t)^2}\,dt<\infty.$$

Corners and zero-speed pieces are allowed. Singleton intervals have zero length and variation, with empty speed sum.

## Facts & Assumptions

**Given:** $\gamma$ and its coordinate path $\Gamma$; real and imaginary components have the meaning of [[def-complex-conjugate-real-imaginary-part-and-modulus]].

[F1] $\Phi$ is an isometric homeomorphism ([[thm-complex-coordinate-isometry-and-topology-transport]]).

[F2] Both lengths are suprema of polygonal sums, with singleton length zero ([[def-complex-path-polygonal-length-and-rectifiability]], [[def-path-polygonal-length-and-rectifiability-in-rn]]).

[F3] A Euclidean path is rectifiable exactly when each coordinate has bounded variation, including the singleton case ([[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]]).

[F4] A continuous piecewise $C^1$ Euclidean path has finite length equal to the sum of its piece speed integrals, with no derivative-matching condition at corners ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]]).

## Proof

1.1 Continuity of $\Gamma$ follows from continuity of $\gamma$ and [F1]. For each partition, isometry identifies each chord length $|\gamma(t_{i+1})-\gamma(t_i)|$ with $\|\Gamma(t_{i+1})-\Gamma(t_i)\|_2$. Summing gives equality of sums, and taking the supremum over the same partitions gives equality of lengths, finite or infinite. [given, F1, F2]

1.2 Apply [F3] to the continuous $\mathbb R^2$ path $\Gamma$. Length equality in step 1.1 identifies its rectifiability with that of $\gamma$, yielding the claimed equivalence with bounded variation of $x$ and $y$. [step 1.1, F2, F3]

2.1 Under the piecewise $C^1$ hypothesis, [F4] applies to $\Gamma$ on the same subdivision. Substitution of step 1.1 gives the complex length formula and finiteness. The coordinate formula for the Euclidean norm gives the displayed square-root integrand; no complex-linear derivative is assumed. [given, step 1.1, F4, algebra]

2.2 For $a=b$, [F2] makes both lengths zero, [F3] gives zero coordinate variations, and [F4] uses an empty sum. Thus all claims include this case. [F2, F3, F4] ∎
''')
write_supplier(5,'Complex path length is invariant under monotone surjective reparametrization',r'''
## Statement

Let $\gamma:[a,b]\to\mathbb C$ be continuous and let $\varphi:[c,d]\to[a,b]$ be continuous, surjective, and either nondecreasing or nonincreasing. Then

$$L_{\mathbb C}(\gamma\circ\varphi)=L_{\mathbb C}(\gamma).$$

This holds for finite and infinite length, pauses, reversal, and singleton intervals. For continuous bijections, the increasing case preserves orientation and the decreasing case reverses it. A constant path has no nontrivial orientation to distinguish.

## Facts & Assumptions

**Given:** The path and reparametrization, with the monotonicity terminology of [[def-monotone-function]].

[F1] Coordinate length equals complex length, including singleton intervals ([[def-complex-path-polygonal-length-and-rectifiability]], [[thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed]]).

[F2] A continuous surjective monotone reparametrization preserves Euclidean path length, including pauses, reversal and singleton intervals ([[thm-arc-length-is-invariant-under-monotone-reparametrization]]).

## Proof

1.1 Put $\Gamma=\Phi\circ\gamma$, a continuous Euclidean path by [F1]. Its reparametrization is $\Gamma\circ\varphi=\Phi\circ(\gamma\circ\varphi)$. By [F2], these Euclidean paths have equal length. [given, F1, F2]

1.2 Apply [F1] to both paths in step 1.1 to obtain the stated equality. If either parameter interval is a singleton, surjectivity makes the image interval a singleton when necessary, and both paths have length zero; this is also covered by [F1] and [F2]. Orientation here records the increasing or decreasing direction of the parameter bijection. [step 1.1, F1, F2, given] ∎
''')
# Preserve complete preimages and propose source edits without changing live content or evidence.
for r in plan['repairs'][:8]:
 p=Path(r['source']);s=p.read_text();(R/'before'/p.name).write_bytes(p.read_bytes())
 deps=r['replacement_deps'];s=re.sub(r'^deps:.*$', 'deps: ['+', '.join(deps)+']', s, flags=re.M)
 # Prior audit claims apply only to the archived before carrier; no new repair evidence is asserted.
 s=re.sub(r'verification:\n.*?(?=^sources:)', '', s, flags=re.M|re.S)
 (R/'items'/p.name).write_text(s)
