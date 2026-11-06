---
id: def-stopped-fukaya-category-algebraic-conventions
kind: definition
title: Finite Fukaya categories, units, twisted objects, and perfect modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 0
deps:
  - def-a-infinity-algebra
  - def-a-infinity-morphism
  - def-differential-graded-algebra
  - def-differential-graded-module
  - def-koszul-sign-rule-for-graded-tensors
  - def-function
dependency_roles:
  def-a-infinity-algebra: mathematical-premise
  def-a-infinity-morphism: mathematical-premise
  def-differential-graded-algebra: mathematical-premise
  def-differential-graded-module: mathematical-premise
  def-koszul-sign-rule-for-graded-tensors: mathematical-premise
  def-function: mathematical-premise
justified_by:
  - lem-stopped-left-right-module-bar-yoneda-transport
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lectures 7 and 10, cohomological A-infinity conventions, twisted complexes, and wrapped-category notation; the notes’ stated errors in Lectures 13–16 are outside these locators.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §1.5, stopped categories and wrapping triangles; used only for the standard terminology recorded here.
    - title: Lyubashenko and Manzyuk, A-infinity-bimodules and Serre A-infinity-functors
      url: https://arxiv.org/pdf/math/0701165v2
      locator: §5.1, pp. 41–44, bicomodule differentials, full morphisms and component extension; adapted below to an unsuspended middle coefficient and the fixed local bar signs.
    - title: Genovese, Adjunctions of quasi-functors between DG-categories
      url: https://fgenovese1987.github.io/documents/papers/qfun_adj.pdf
      locator: §1, pp. 1–2, right quasi-representable bimodule convention; used for terminology, not as an imported localization theorem.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Work over $k=\mathbb C$, with cohomological grading and the Koszul rule of the earlier algebraic definition. A **small uncurved $A_\infty$-category** $\mathcal A$ consists of a set of objects, a graded $k$-vector space $\operatorname{hom}_{\mathcal A}(X,Y)$ for every ordered pair, and operations $\mu^d$ of degree $2-d$ on every composable $d$-tuple. For each composable tuple the operations obey the same signed Stasheff identity as the earlier uncurved $A_\infty$-algebra definition, with the object labels required to match the inputs and output. No curvature operation $\mu^0$ is included.

A strict unit at $X$ is a closed element $e_X\in\operatorname{hom}^0(X,X)$ with $\mu^2(e_X,x)=x=\mu^2(x,e_X)$ and $\mu^d(\ldots,e_X,\ldots)=0$ for $d\ne2$, in the fixed unsuspended convention. A **cohomological unit** is a class $[e_X]\in H^0(\operatorname{hom}(X,X),\mu^1)$ whose products under the induced cohomological $\mu^2$ act as identities on every $H^*(\operatorname{hom}(X,Y))$ and $H^*(\operatorname{hom}(Y,X))$. A category is homologically unital when such classes are supplied for all objects. Strict units and homological units are different interfaces.

For the cohomology-category, finite pretriangulated-envelope, retract, perfect-module, split-generation and derived-localization constructions below, require $\mathcal A$ to be homologically unital; every target category in the localization property is likewise required to be homologically unital. For a homologically unital category $\mathcal C$, its **cohomology category** $H^0(\mathcal C)$ has the same objects, morphism spaces $H^0(\operatorname{hom}_{\mathcal C}(X,Y),\mu^1)$, composition $[a]\circ[b]=[\mu^2(a,b)]$, and identity $[e_X]$ at $X$. The bar, module and opposite formulas themselves also make sense for nonunital algebraic data.

An uncurved $A_\infty$-functor $F:\mathcal A\to\mathcal B$ has an object map and composable-input maps $F^d$ of degree $1-d$ satisfying the earlier $A_\infty$-morphism identity for every labelled input string. Fix the following explicit bar convention. Inputs are written in composition order: $a_j\in\operatorname{hom}(X_j,X_{j-1})$, and $\mu^d(a_1,\ldots,a_d)\in\operatorname{hom}(X_d,X_0)$. Put $V(X,Y)=s\operatorname{hom}(X,Y)$, where $|sa|=|a|-1$ and $s$ has degree $-1$, and $c_d=d(d-1)/2$. The object-labelled tensor coalgebra $B\mathcal A$ is the direct sum of all finite composable words $v_1\otimes\cdots\otimes v_n$, including one empty word at each object, with deconcatenation coproduct. Its degree-one Taylor components are
$$b_d=-(-1)^{c_d}s\mu^d(s^{-1})^{\otimes d},\qquad d\ge1.$$
All tensor maps use Koszul signs. Equivalently,
$$b_d(sa_1,\ldots,sa_d)=(-1)^{1+c_d+\sum_{j=1}^d(d-j)(|a_j|-1)}s\mu^d(a_1,\ldots,a_d).$$
On a word, $b$ inserts $b_d$ into each consecutive block, with sign $(-1)^{|v_1|+\cdots+|v_r|}$ for an insertion after $r$ letters. The given unsuspended Stasheff identity is exactly $b^2=0$ in these conventions. The common minus on all $b_d$ is intentional: in particular $b_1(sa)=-s\mu^1(a)$.

A right $A_\infty$-module $N$ consists of graded spaces $N(X)$ and maps
$$m^{d|1}:N(X_0)\otimes\operatorname{hom}(X_1,X_0)\otimes\cdots\otimes\operatorname{hom}(X_d,X_{d-1})\longrightarrow N(X_d),\quad |m^{d|1}|=1-d.$$
The actual cofree right bar comodule is the direct sum $C_N=\bigoplus N(X_0)\otimes V(X_1,X_0)\otimes\cdots\otimes V(X_d,X_{d-1})$, with unsuspended module coefficient and coaction splitting off every suffix. Define degree-one prefix components by
$$q_d(n;sa_1,\ldots,sa_d)=(-1)^{c_{d+1}+d(|n|-1)+\sum_{j=1}^d(d-j)(|a_j|-1)}m^{d|1}(n;a_1,\ldots,a_d),\quad d\ge0.$$
Thus $q_0=m^{0|1}$ is the cochain differential on $N(X)$. The comodule differential is the following completely specified map:
$$\begin{aligned} D_N(n\otimes v_1\cdots v_k)={}&\sum_{d=0}^k q_d(n;v_1,\ldots,v_d)\otimes v_{d+1}\cdots v_k\\ &+\sum_{\substack{r\ge0,\ j\ge1\\r+j\le k}}(-1)^{|n|+\sum_{i=1}^r|v_i|}n\otimes v_1\cdots v_r\otimes b_j(v_{r+1},\ldots,v_{r+j})\otimes v_{r+j+1}\cdots v_k. \end{aligned}$$
The module identities mean $D_N^2=0$; this explicit finite formula defines every component identity without an implicit sign choice. It obeys $\rho D_N=(D_N\otimes1+1\otimes b)\rho$ using the Koszul tensor rule. The representable module is $Y_X(T)=\operatorname{hom}(T,X)$ with $m^{d|1}(n;a_1,\ldots,a_d)=\mu^{d+1}(n,a_1,\ldots,a_d)$. To check its identity, restrict $b$ to words whose first letter lies in $s\operatorname{hom}(-,X)$, conjugate by the suspension of that first coefficient, and multiply the resulting degree-one operator by $-1$. The suffix insertion sign becomes $(-1)^{|n|+\sum_{i\le r}|v_i|}$ and the prefix becomes exactly $q_d$ above; its square is zero. Thus the representable differential is $\mu^1$, with the prescribed category convention.

A degree-$h$ module premorphism is a right bar-comodule map $f:C_N\to C_P$ of degree $h$. It is determined by all its prefix maps $f_d:N\otimes V^{\otimes d}\to P$, extended on words by $f(n\otimes v_1\cdots v_k)=\sum_{d=0}^k f_d(n;v_1,\ldots,v_d)\otimes v_{d+1}\cdots v_k$. The full premorphism space is a product over arities and object strings; every fixed-word formula is finite. Its differential is $\partial f=D_Pf-(-1)^h fD_N$, and composition is composition of these comodule maps. A module map is a closed degree-zero premorphism; it is a quasi-isomorphism when $f_0$ is a cohomology isomorphism at every object. 

A left module $N$ assigns graded spaces $N(X)$ and degree-$1-d$ maps $\ell^{d|1}(a_1,\ldots,a_d;n)\in N(X_0)$ for $a_j:X_j\to X_{j-1}$ and $n\in N(X_d)$. Put $v_j=sa_j$, $S(v_1,\ldots,v_d)=\sum_j|v_j|$, and $P(v_1,\ldots,v_d)=\sum_{i<j}|v_i||v_j|$. Its cofree LEFT comodule is $C_N^L=B\mathcal A\otimes N$, with deconcatenation splitting off prefixes. The degree-one suffix components are
$$q_d^L(v_1,\ldots,v_d;n)=(-1)^{c_{d+1}+\sum_{j=1}^d(d-j)|v_j|}\ell^{d|1}(a_1,\ldots,a_d;n).$$
In particular $q_0^L=\ell^{0|1}$ is the value differential and $q_1^L(sa;n)=-\ell^{1|1}(a;n)$. Its differential is
$$D_N^L(v_1\cdots v_k;n)=\sum_{\substack{r\ge0,\ j\ge1\\r+j\le k}}(-1)^{\sum_{i=1}^r|v_i|}(v_1\cdots v_r\,b_j(v_{r+1},\ldots,v_{r+j})\,v_{r+j+1}\cdots v_k;n)+\sum_{d=0}^k(-1)^{\sum_{i=1}^{k-d}|v_i|}v_1\cdots v_{k-d}\otimes q_d^L(v_{k-d+1},\ldots,v_k;n).$$
The identities mean $(D_N^L)^2=0$. A degree-$h$ left premorphism is determined by degree-$h$ suffix maps $f_d:V^{\otimes d}\otimes N\to P$ and has extension
$$f(v_1\cdots v_k;n)=\sum_{d=0}^k(-1)^{h\sum_{i=1}^{k-d}|v_i|}v_1\cdots v_{k-d}\otimes f_d(v_{k-d+1},\ldots,v_k;n).$$
Its differential and composition are $\partial f=D_P^Lf-(-1)^hfD_N^L$ and ordinary composition. Its Hom space is a product over arities and object strings. A closed degree-zero map is an objectwise quasi-isomorphism exactly when every $f_0$ is. The covariant representable is $Y_X^L(T)=\operatorname{hom}_{\mathcal A}(X,T)$ with $\ell^{d|1}(a_1,\ldots,a_d;n)=\mu^{d+1}(a_1,\ldots,a_d,n)$. This is distinct from $Y_X^R(T)=\operatorname{hom}_{\mathcal A}(T,X)$. Homological unitality of a module means that the indicated binary action of each degree-zero cohomological unit is identity on value cohomology. Neither side imposes vanishing of higher unit-input operations.

The opposite category has $\operatorname{hom}_{\mathcal A^{\mathrm{op}}}(X,Y)=\operatorname{hom}_{\mathcal A}(Y,X)$ and
$$\mu_{\mathrm{op}}^d(a_1,\ldots,a_d)=(-1)^{c_{d-1}+\sum_{i<j}|a_i||a_j|}\mu^d(a_d,\ldots,a_1).$$
On suspended words the reversal is $R(v_1\cdots v_d)=(-1)^{d+P(v_1,\ldots,v_d)}v_d\cdots v_1$; $R$ fixes empty words, and $b^{\mathrm{op}}=RbR^{-1}$. For a left module define the exact reversal
$$\Theta_N(v_1\cdots v_d;n)=(-1)^{d+P(v_1,\ldots,v_d)+|n|S(v_1,\ldots,v_d)}(n;v_d\cdots v_1).$$
This identifies it with a right module over $\mathcal A^{\mathrm{op}}$, using $D_N^{R,\mathrm{op}}=\Theta_ND_N^L\Theta_N^{-1}$ and $f^{R,\mathrm{op}}=\Theta_Pf^L\Theta_N^{-1}$ at EVERY Taylor arity. Explicitly,
$$m_{\mathrm{op}}^{d|1}(n;a_1,\ldots,a_d)=(-1)^{c_d+\sum_{i<j}|a_i||a_j|+|n|\sum_i|a_i|}\ell^{d|1}(a_d,\ldots,a_1;n),$$
$$f_d^{R,\mathrm{op}}(n;v_1,\ldots,v_d)=(-1)^{d+P(v_1,\ldots,v_d)+|n|S(v_1,\ldots,v_d)}f_d^L(v_d,\ldots,v_1;n).$$
The same involution transports in the reverse direction. At binary category arity the opposite multiplication is the ordinary graded opposite, and at one category input its right action is $n\cdot_{\mathrm{op}}a=(-1)^{|n||a|}a n$. In the strict DG specialization, a homogeneous closed left premorphism with only $f_0$ nonzero satisfies $f_0(a n)=(-1)^{|f_0||a|}a f_0(n)$; a right one satisfies $f_0(n a)=f_0(n)a$. No left/right variance is suppressed.

For shifts, let $L_k$ be a graded line of degree $-k$ and set $\operatorname{hom}(X[k],Y[l])=\operatorname{hom}(L_k,L_l)\otimes\operatorname{hom}(X,Y)$. Identify $s(f\otimes a)$ with $(-1)^{|f|}f\otimes sa$. Before this identification is undone, the suspended matrix operation on $f_i\otimes v_i$ is $(-1)^{\sum_{i<j}|v_i||f_j|+\sum_i|f_i|}(f_1\cdots f_d)\otimes b_d(v_1,\ldots,v_d)$, summed over matching finite matrix indices. This fixes all signs in the shifted additive category; there is no unspecified shift convention.

A **finite twisted object** is a finite direct sum of those cohomological shifts with a degree-one matrix $q$ strictly decreasing a fixed finite filtration. Set $t=-sq$ and require the finite curvature equation
$$\sum_{d\ge1}b_d(t,\ldots,t)=0,\qquad\text{equivalently}\qquad\sum_{d\ge1}(-1)^{c_{d-1}}\mu^d(q,\ldots,q)=0.$$
The suspended operations between twisted objects are
$$b_d^t(v_1,\ldots,v_d)=\sum_{r_0,\ldots,r_d\ge0}b_{d+R}(t_0^{r_0},v_1,t_1^{r_1},\ldots,v_d,t_d^{r_d}),\quad R=\sum_i r_i.$$
They are finite on each input matrix word. Undo the SAME suspension convention to define $\mu^d_{\mathrm{tw}}$. Explicitly, for $|a_i|=\alpha_i$, the unsuspended insertion of $q_0^{r_0},a_1,q_1^{r_1},\ldots,a_d,q_d^{r_d}$ has sign
$$(-1)^{R+c_{d+R}+c_d+\sum_{i=1}^d(r_i+\cdots+r_d)(\alpha_i-1)}.$$
The morphism differential is $\mu^1_{\mathrm{tw}}$, including every such higher-operation term. In the DG specialization it is $Da=da+q_{\rm out}a-(-1)^{|a|}a q_{\rm in}$, and the curvature equation is $dq+q^2=0$. This signed equation replaces the former unsigned sum; the two are not equivalent for arbitrary higher operations.

Modules and full premorphisms extend to finite shifted sums with the fixed graded-line tensor convention and unsuspended module coefficients. Here is the insertion map on their cofree comodules. On a composable matrix word $v_1,\ldots,v_d$ through objects $X_0,\ldots,X_d$, let $t_i=-sq_i\in s\operatorname{hom}(X_i,X_i)$ be the degree-zero twisting matrix at $X_i$. Write $t_i^{\otimes0}$ for the empty word. Define degree-zero linear maps by
$$E^R_{N,t}(n;v_1,\ldots,v_d)=\sum_{r_0,\ldots,r_d\ge0}(n;t_0^{\otimes r_0},v_1,t_1^{\otimes r_1},\ldots,v_d,t_d^{\otimes r_d}),\qquad n\in N(X_0),$$
$$E^L_{N,t}(v_1,\ldots,v_d;n)=\sum_{r_0,\ldots,r_d\ge0}(t_0^{\otimes r_0},v_1,t_1^{\otimes r_1},\ldots,v_d,t_d^{\otimes r_d};n),\qquad n\in N(X_d).$$
In each summand expand the matrices and sum only over matching summand indices, retaining the module coefficient on its displayed side. These maps act on the underlying right and left cofree matrix-word spaces, respectively. In particular at $d=0$ they send $(n)$ to $\sum_{r\ge0}(n;t_0^{\otimes r})$ on the right and to $\sum_{r\ge0}(t_0^{\otimes r};n)$ on the left. Every gap has finitely many nonzero summands because $q_i$ strictly decreases a finite filtration. There is no extra insertion sign: each $t_i$ has degree zero, and its factor from $t_i=-sq_i$ is already included. The category map $E_t$ is the same insertion formula with the module coefficient omitted, including $E_t(1_{X_i})=\sum_{r\ge0}t_i^{\otimes r}$ for the empty word. Use the appropriate side for $E_{N,t}$ and set $D_N^t=E_{N,-t}D_NE_{N,t}$ and $F^t=E_{P,-t}FE_{N,t}$; likewise $b^t=E_{-t}bE_t$. Thus the right twisted prefix core is $q_d^{R,t}(n;v)=\sum_{\mathbf r}q_{d+R}^R(n;t_0^{\otimes r_0},v_1,\ldots,v_d,t_d^{\otimes r_d})$, with the intervening $t_i$ strings as displayed above; the left twisted suffix core and both premorphism cores use exactly the corresponding insertion into $q^L$ and $f$. The inverse of each insertion map is obtained by replacing every $t_i$ by $-t_i$. The justifying lemma proves the inverse, square-zero and face identities. All conjugations and inverses are finite on each matrix word; the curvature vanishes by the displayed curvature equation.

The finite pretriangulated envelope closes under finite sums, shifts, and mapping cones in this convention. Its idempotent completion additionally includes every retract in its cohomology category. Here $X$ is a **retract** of $T$ if there are morphisms $i:X\to T$ and $p:T\to X$ in $H^0$ with $p i=1_X$. Explicitly, the idempotent completion of a category $\mathcal H$ has objects $(T,e)$ with $e^2=e\in\operatorname{End}_{\mathcal H}(T)$ and morphisms $a:(T,e)\to(U,f)$ satisfying $a=f a e$; composition is inherited from $\mathcal H$ and the identity of $(T,e)$ is $e$. Apply this to $\mathcal H=H^0$ of the finite envelope. The module enhancement used here is the full dg category of homologically unital modules with the full premorphisms defined above; its strict identity has component $f_0=\operatorname{id}$ and $f_d=0$ for $d>0$. The **perfect modules** are the retracts, in its cohomology category, of finite iterated cones and shifts of representable modules. For a set $G$ of objects, $\operatorname{thick}(G)$ is the smallest full subcategory closed under those operations and containing $G$; $G$ split-generates when this equals the entire idempotent-complete pretriangulated category.

For a set $S$ of closed degree-zero morphisms, an $S$-local module is one on which each map induced by $s\in S$ is a quasi-isomorphism. Functors in the following localization property preserve cohomological units, meaning $[F^1(e_X)]=[e_{F(X)}]$ for every object $X$; an equivalence is an isomorphism in $H^0$ of the target. The following bimodule model specifies both quasi-functors and their morphisms.

An **$\mathcal A$–$\mathcal B$ bimodule** has graded spaces $M(X,Y)$, covariant in the $\mathcal A$ label $X$ and contravariant in the $\mathcal B$ label $Y$. Form the direct sum $C_M$ of words
$$u_1\otimes\cdots\otimes u_p\otimes m\otimes w_1\otimes\cdots\otimes w_q,$$
where $u_i\in s\operatorname{hom}_{\mathcal A}(X_i,X_{i-1})$, $m\in M(X_p,Y_0)$ and $w_j\in s\operatorname{hom}_{\mathcal B}(Y_j,Y_{j-1})$, including $p=0$ and $q=0$. Its outer labels are $(X_0,Y_q)$. The maps $\rho_L:C_M\to B\mathcal A\otimes C_M$ and $\rho_R:C_M\to C_M\otimes B\mathcal B$ sum over all cuts splitting off an $\mathcal A$ prefix and a $\mathcal B$ suffix, respectively, including empty cuts. Supply a degree-one map $D_M:C_M\to C_M$ preserving outer labels, with
$$D_M^2=0,\qquad \rho_LD_M=(b_{\mathcal A}\otimes1+1\otimes D_M)\rho_L,\qquad \rho_RD_M=(D_M\otimes1+1\otimes b_{\mathcal B})\rho_R.$$
Its core $d^M_{p,q}$ is projection to words with both outer words empty, hence has output $M(X_0,Y_q)$. Equivalently, extend these degree-one cores by applying each to every suffix of the $\mathcal A$ word together with every prefix of the $\mathcal B$ word and the middle coefficient, retaining the unused outer words; the sign is $(-1)^{\text{degree of the retained }\mathcal A\text{ prefix}}$. Add all $b_{\mathcal A}$ and $b_{\mathcal B}$ insertions, with the Koszul tensor signs. This recovers $D_M$ and specifies its identities on every finite word. Require the left modules at fixed $Y$ and right modules at fixed $X$ to be homologically unital: their cores are $q_p^L=d^M_{p,0}$ and $q_q^R=d^M_{0,q}$ in the preceding module conventions, so the induced binary unit actions on value cohomology are identities.

A degree-$h$ bimodule premorphism $f:C_M\to C_N$ preserves outer labels and satisfies $\rho_Lf=(1\otimes f)\rho_L$ and $\rho_Rf=(f\otimes1)\rho_R$. It is specified by arbitrary degree-$h$ cores $f_{p,q}$ with the same input/output labels as $d^M_{p,q}$. Extend them over the same suffix/prefix cuts, now with sign $(-1)^{h\,\text{degree of the retained }\mathcal A\text{ prefix}}$. All cores form a product over $p,q$ and object strings; each input word uses only finitely many cuts. Set $\partial f=D_Nf-(-1)^hfD_M$, with ordinary composition. This defines the full dg category of these bimodules. Two objects are **coherently quasi-isomorphic** here when they are isomorphic in its $H^0$: there are closed degree-zero full premorphisms $f,g$ and degree-minus-one full premorphisms $h,k$ with $gf-1=\partial h$ and $fg-1=\partial k$. Thus the comparison includes all mixed arities.

Write $\operatorname{QFun}(\mathcal A,\mathcal B)$ for the full dg subcategory of these bimodules for which, for each $X$, the right module $M(X,-)$ is isomorphic in $H^0$ of the full right-module dg category to $Y_{F(X)}^{R}=\operatorname{hom}_{\mathcal B}(-,F(X))$ for some object $F(X)$ of $\mathcal B$. Its objects are the **quasi-functors**, or right quasi-representable bimodules, in this bar model. Representability is a condition, not chosen strict identifications. For a closed degree-zero $a:X'\to X$, its induced full right-module map $M(a):M(X',-)\to M(X,-)$ has cores $-d^M_{1,q}(sa;m;w_1,\ldots,w_q)$; the minus is the preceding left-module sign $q_1^L(sa;m)=-\ell^{1|1}(a;m)$. Let $\operatorname{QFun}_S(\mathcal A,\mathcal B)$ be the full subcategory where every $M(a)$, $a\in S$, is invertible in that right-module $H^0$.

Restriction along a unit-preserving $A_\infty$-functor $Q:\mathcal A\to\mathcal L$ is the dg functor $Q^*:M\mapsto M(Q(-),-)$ defined on cores by substituting the bar coalgebra map $BQ$ in the $\mathcal A$ input word. Explicitly, its Taylor maps are $\widehat Q_d=(-1)^{c_d}sQ^d(s^{-1})^{\otimes d}$, and $BQ$ sums over all ordered partitions into nonempty consecutive blocks, applying $\widehat Q$ to each block; it sends each empty word to the empty word at its image object. These signs give $b_{\mathcal L}BQ=BQb_{\mathcal A}$. For both a bimodule core and a premorphism core, substitute this finite sum in its left word; for the differential also retain the prescribed outer $b_{\mathcal A}$ and $b_{\mathcal B}$ insertions. A **quasi-equivalence of dg categories** means a dg functor inducing a quasi-isomorphism on every morphism complex and an essentially surjective functor on $H^0$ (each target object is isomorphic there to an image object).

A **derived localization** $Q:\mathcal A\to\mathcal A[S^{-1}]=\mathcal L$ is a unit-preserving functor to a homologically unital category, carrying $S$ to equivalences, such that for every small homologically unital target $\mathcal B$ the restriction
$$Q^*:\operatorname{QFun}(\mathcal L,\mathcal B)\longrightarrow\operatorname{QFun}_S(\mathcal A,\mathcal B)$$
is a quasi-equivalence in the explicit sense above. This requires both quasi-isomorphisms of the full comparison complexes and existence of extensions up to the specified coherent quasi-isomorphisms. It does not choose strict inverses to the arrows in $S$ or assert existence of a localization for geometric data.

## Definition references

[[def-a-infinity-algebra]]

[[def-a-infinity-morphism]]

[[def-differential-graded-algebra]]

[[def-differential-graded-module]]

[[def-koszul-sign-rule-for-graded-tensors]]

[[def-function]]

## Remarks

These conventions fix the algebraic vocabulary used by the finite-operation, outgoing-pairing, and generation items on this page. They do not assert that a geometric Floer category or any of its units, moduli spaces, bar maps, or localization arrows exist.
