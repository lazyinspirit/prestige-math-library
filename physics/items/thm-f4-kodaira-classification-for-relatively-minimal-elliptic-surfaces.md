---
id: thm-f4-kodaira-classification-for-relatively-minimal-elliptic-surfaces
kind: theorem
title: "Kodaira classification in the relatively minimal elliptic-surface case"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited from the elliptic-fibration, proper-flat Euler-characteristic, intersection, normalization and completion suppliers."
deps:
  - def-f4-elliptic-fibration-with-section
  - def-f4-genus-one-fibration
  - lem-f4-fiber-intersection-graphs-are-affine-dynkin
  - lem-f4-arithmetic-genus-zero-component-is-smooth-rational
  - def-axiom-of-choice
  - lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces
  - def-arithmetic-genus-proper-curve
  - def-degree-invertible-sheaf-proper-dimension-one
  - thm-surface-intersection-product-bilinear-and-symmetric
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-h0-structure-sheaf-proper-curve
  - cor-euler-characteristic-locally-constant-flat-proper-family
  - thm-nonaffine-regular-local-ring-is-ufd
  - lem-normalization-lowers-arithmetic-genus-delta
  - thm-completion-is-exact-on-finite-modules
  - lem-qftx-gaga-algebraic-analytic-local-completions
  - thm-weierstrass-preparation-theorem
  - thm-holomorphic-implicit-function-theorem
  - lem-proper-cohomology-field-extension
dependency_roles:
  def-f4-elliptic-fibration-with-section: mathematical-premise
  def-f4-genus-one-fibration: mathematical-premise
  lem-f4-fiber-intersection-graphs-are-affine-dynkin: mathematical-premise
  lem-f4-arithmetic-genus-zero-component-is-smooth-rational: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces: mathematical-premise
  def-arithmetic-genus-proper-curve: mathematical-premise
  def-degree-invertible-sheaf-proper-dimension-one: mathematical-premise
  thm-surface-intersection-product-bilinear-and-symmetric: mathematical-premise
  thm-intersection-with-curve-as-degree-of-restriction: mathematical-premise
  thm-h0-structure-sheaf-proper-curve: mathematical-premise
  cor-euler-characteristic-locally-constant-flat-proper-family: mathematical-premise
  thm-nonaffine-regular-local-ring-is-ufd: mathematical-premise
  lem-normalization-lowers-arithmetic-genus-delta: mathematical-premise
  thm-completion-is-exact-on-finite-modules: mathematical-premise
  lem-qftx-gaga-algebraic-analytic-local-completions: mathematical-premise
  thm-weierstrass-preparation-theorem: mathematical-premise
  thm-holomorphic-implicit-function-theorem: mathematical-premise
  lem-proper-cohomology-field-extension: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Miranda, The Basic Theory of Elliptic Surfaces, Lecture I §6, pp. 11–15"
      url: "https://www.math.colostate.edu/~miranda/BTES-Miranda.pdf"
      locator: "The proof of Theorem I.6.6: intersection-form lemma I.6.1, affine-Dynkin graph lemma/corollary I.6.3–I.6.4, and the component and dual-graph analysis."
    - title: "David R. Morrison and Cumrun Vafa, Compactifications of F-Theory on Calabi–Yau Threefolds – I, arXiv:hep-th/9602114v3"
      url: "https://arxiv.org/pdf/hep-th/9602114v3"
      locator: "§3.1, printed pp. 6–10: Kodaira fiber table, section hypothesis, and Weierstrass model; the gauge dictionary is not used as a proof of the geometry."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§4.1, Table 4.1 and pp. 22–25; local vanishing orders and the separation of geometric fiber type from split/non-split monodromy."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§4.1, pp. 22–25; Kodaira fibers, discriminant orders, and monodromy qualifications."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $C$ be a smooth connected complex algebraic curve and let $\pi:S\to C$ be a morphism from a projective smooth complex algebraic surface. Assume $\pi$ is proper (separated, of finite type, and universally closed), flat (each local ring $\mathcal O_{S,s}$ is flat over $\mathcal O_{C,\pi(s)}$), and surjective. For $c\in C$, its geometric fiber is $S\times_C\operatorname{Spec}\overline{\kappa(c)}$. For the generic point $\eta$ of $C$, assume the geometric generic fiber $S_{\bar\eta}:=S\times_C\operatorname{Spec}\overline{\mathbb C(C)}$ is a smooth proper geometrically integral curve with $\dim_{\mathbb C(C)}H^1(S_\eta,\mathcal O_{S_\eta})=1$. Assume there is a specified regular section $s:C\to S$ with $\pi\circ s=\operatorname{id}_C$, and every geometric fiber is connected. Assume $S$ is nonsingular and $\pi$ is relatively minimal, meaning that no fiber contains a smooth curve isomorphic to $\mathbb P^1_{\mathbb C}$ with self-intersection $-1$.

Every singular scheme-theoretic fiber is of Kodaira type $I_n$ ($n\ge1$), II, III, IV, $I_n^*$ ($n\ge0$), IV*, III*, or II*. Here a singular fiber is one that is not a smooth curve over its base point. A rational curve means an integral curve whose normalization is isomorphic to $\mathbb P^1_{\mathbb C}$; a smooth rational component is therefore isomorphic to $\mathbb P^1_{\mathbb C}$. The multiplicity of a component is its coefficient in the scheme-theoretic fiber divisor, and a fiber is multiple if all component multiplicities have a common integer divisor greater than one.

The type symbols specify these configurations. Type $I_1$ is an irreducible reduced rational curve with one node, analytically $uv=0$ at that point. For $n\ge3$, type $I_n$ is a reduced cycle of $n$ smooth rational components, each of multiplicity one, with neighboring components meeting transversely once; type $I_2$ is two such components meeting transversely at two distinct points. Type II is an irreducible reduced rational curve with one ordinary cusp, analytically $v^2=u^3$. Type III is two smooth rational components of multiplicity one meeting at one point with intersection number two. Type IV is three smooth rational components of multiplicity one meeting pairwise once at one common point.

For $n\ge0$, type $I_n^*$ has dual graph $\widetilde D_{n+4}$: for $n=0$ this is the four-legged star; for $n\ge1$ it has two trivalent vertices joined by a path of $n$ edges, with two terminal leaves at each end. Types IV*, III*, and II* have dual graphs $\widetilde E_6$, $\widetilde E_7$, and $\widetilde E_8$, respectively, with arm lengths $(2,2,2)$, $(1,3,3)$, and $(1,2,5)$. In these $D$ and $E$ fibers the component multiplicities are the coordinates of the primitive positive integer null vector of the component intersection matrix $M$, where $M_{ii}=-2$ and $M_{ij}=C_i\cdot C_j$ for distinct components $C_i,C_j$; primitive means that the coordinate gcd is one. A section excludes multiple fibers. These type labels describe geometric fiber configurations only; no physical interpretation or classification over a higher-dimensional base is asserted.

## Statement references

[[def-f4-elliptic-fibration-with-section]]

[[lem-f4-fiber-intersection-graphs-are-affine-dynkin]]

[Miranda, Lecture I §6](https://www.math.colostate.edu/~miranda/BTES-Miranda.pdf)

## Facts & Assumptions

**Given:** Exactly the proper relatively minimal elliptic surface, section, nonsingular total surface, connected complex base curve and geometrically connected genus-one generic fiber of the Statement, in the algebraic fibration convention of the declared definitions.

[A1] Full AC is the choice principle of [[def-axiom-of-choice]], inherited from the intersection, normalization and completion suppliers.

[A2] By [[def-f4-elliptic-fibration-with-section]], the morphism is a flat genus-one fibration with a regular section; its exact prerequisite [[def-f4-genus-one-fibration]] requires the total variety $S$ to be projective. Proper surjectivity from compact $S$ also makes $C$ compact, so degree-one point divisors on $C$ are numerically equivalent. The generic-fiber group law supplied by the sectioned-fibration definition is not used in this intersection argument.


[F1] [[def-f4-elliptic-fibration-with-section]] supplies a proper flat fibration with section, while [[def-f4-genus-one-fibration]] requires the total surface to be projective. For $c\in C$, the fiber divisor $D_c=\pi^{-1}(c)=\pi^*[c]$ is Cartier: a local parameter at $c$ remains a nonzerodivisor after pullback by flatness. Each component $C_i$ of $D_c$ maps to $c$, so $\mathcal O_S(D_c)|_{C_i}$ is the pullback of a one-dimensional $\mathbb C$-vector space and is trivial; hence $D_c\cdot C_i=0$ by [[thm-intersection-with-curve-as-degree-of-restriction]], and bilinearity gives $D_c^2=0$. For the section $s:C\to S$, $s^*\mathcal O_S(D_c)\cong\mathcal O_C(c)$, so $s(C)\cdot D_c=\deg_C\mathcal O_C(c)=1$ by [[def-degree-invertible-sheaf-proper-dimension-one]] and the same intersection-degree theorem. Distinct fibers are disjoint. Intersections of distinct effective components are nonnegative ([[thm-surface-intersection-product-bilinear-and-symmetric]]); each is Cartier because the smooth surface is locally factorial ([[thm-nonaffine-regular-local-ring-is-ufd]]).


[F3] Adjunction gives $K_S\cdot C_i+C_i^2=2p_a(C_i)-2$ for an integral Cartier curve on a smooth projective surface ([[lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces]], [[def-arithmetic-genus-proper-curve]]). Since $C_i$ is a proper integral curve over $\mathbb C$, $H^0(C_i,\mathcal O_{C_i})=\mathbb C$ by [[thm-h0-structure-sheaf-proper-curve]], so $p_a(C_i)=\dim_\mathbb C H^1(C_i,\mathcal O_{C_i})$ is a nonnegative integer. Arithmetic genus zero implies $C_i\cong\mathbb P^1_{\mathbb C}$ ([[lem-f4-arithmetic-genus-zero-component-is-smooth-rational]]).

[F4] The Euler characteristic $\chi(D_c,\mathcal O_{D_c})$ is locally constant in the proper flat finite-presentation family $\pi:S\to C$ ([[cor-euler-characteristic-locally-constant-flat-proper-family]]). On the generic fiber it is $1-1=0$: the generic fiber is proper and geometrically integral, so its $H^0$ is the function field by [[thm-h0-structure-sheaf-proper-curve]], and its $H^1$ has dimension one over the function field by the Statement. The proper cohomology field-extension comparison [[lem-proper-cohomology-field-extension]] identifies this $H^1$ after extension to $\overline{\mathbb C(C)}$ with $H^1(S_{\bar\eta},\mathcal O_{S_{\bar\eta}})$, so [[def-f4-genus-one-fibration]] applies with the exact geometric-generic-fiber hypothesis. Since $C$ is connected, $\chi(D_c,\mathcal O_{D_c})=0$ for every fiber.

[F5] A finite connected loopless multigraph with matrix $M_{ii}=-2$, $M_{ij}$ equal to edge multiplicity, negative semidefinite form, one-dimensional kernel, and positive kernel vector is one of the affine ADE graphs; its primitive positive integral null vector is unique ([[lem-f4-fiber-intersection-graphs-are-affine-dynkin]]).

[F6] For an integral proper curve, normalization is finite and smooth and $p_a=g+\sum_p\delta_p$, where $\delta_p$ is the complex dimension of the local normalization quotient; it is positive exactly at singular points. [[lem-normalization-lowers-arithmetic-genus-delta]]

[F7] Completion is exact on finite modules over a Noetherian ring. Algebraic finite-type complex local rings and their analytic local rings have the same completed presentation, retaining its defining ideal. [[thm-completion-is-exact-on-finite-modules]], [[lem-qftx-gaga-algebraic-analytic-local-completions]]

[F8] Holomorphic preparation replaces an analytic germ regular of order two in one variable by a unit times a monic quadratic. The holomorphic implicit theorem supplies analytic roots of units and analytic coordinate inverses when their indicated derivatives are invertible. [[thm-weierstrass-preparation-theorem]], [[thm-holomorphic-implicit-function-theorem]]


## Proof

**Proof technique:** use the exact edge-square identity and adjunction for reducible fibers; use the normalization defect and convergent quadratic preparation for irreducible fibers.

1.1 Let $D=\pi^{-1}(c)$ be any fiber. By [F1], $D^2=0$, $s(C)\cdot D=1$, and [F4] gives $\chi(D,\mathcal O_D)=0$. Adjunction for the effective Cartier divisor $D$ gives $D\cdot(K_S+D)=-2\chi(D,\mathcal O_D)$ ([[lem-adjunction-formula-for-effective-divisors-on-smooth-surfaces]]), hence $K_S\cdot D=0$. If $D=mD_0$ with $D_0$ an integral divisor and $m>1$, the section gives $$1=s(C)\cdot D=m\bigl(s(C)\cdot D_0\bigr),$$ where $s(C)\cdot D_0$ is an integer, contradicting $m>1$. Thus no fiber is multiple. [F1, F3, F4, given, algebra]

1.2 Suppose $D=\sum_{i=1}^r n_iC_i$ is reducible. Its support is connected, $n_i>0$, and the component matrix $M_{ij}=C_i\cdot C_j$ has nonnegative off-diagonal entries and $Mn=0$ by [F1]. For every real vector $v$, expand the row equations to obtain the exact identity $$v^{\mathsf T}Mv=-\sum_{i<j}M_{ij}n_in_j\left(\frac{v_i}{n_i}-\frac{v_j}{n_j}\right)^2.$$ Thus the form is negative semidefinite. Its quadratic value is zero exactly when $v_i/n_i=v_j/n_j$ along every edge; connectedness forces $v$ proportional to $n$. In particular the kernel is one-dimensional: a kernel vector has zero quadratic value, and the positive vector $n$ is already in the kernel. This argument allows zero coefficients and does not presume that the positive and negative supports of a divisor meet. [F1, given, algebra]

2.1 Every component of a reducible fiber meets another one, so the row equation gives $$C_i^2=-\frac{1}{n_i}\sum_{j\ne i}n_j(C_i\cdot C_j)<0.$$ The positive multiplicity vector and the one-dimensional kernel needed in [F4] are exactly those proved in step 1.2; there is no additional numerical-independence assumption on the component classes. [F1, step 1.2, algebra]

2.2 Each $C_i$ is an effective Cartier curve on the smooth surface. Using adjunction [F3], $K_S\cdot D=0$ from step 1.1 becomes $$0=\sum_i n_i\bigl(2p_a(C_i)-2-C_i^2\bigr).$$ First, every $C_i^2\le0$ by step 1.2. If $C_i^2=0$, then $0=D\cdot C_i=\sum_{j\ne i}n_j(C_j\cdot C_i)$, so $C_i$ meets no other component, contradicting connectedness of the reducible support. Hence $C_i^2<0$ for every $i$. If $p_a(C_i)=0$, [F3] gives $C_i\cong\mathbb P^1_{\mathbb C}$; relative minimality excludes $C_i^2=-1$, so integrality and strict negativity give $C_i^2\le-2$ and its summand is nonnegative. If $p_a(C_i)\ge1$, then $2p_a(C_i)-2-C_i^2>0$. Thus every summand is nonnegative, and one with $p_a(C_i)\ge1$ is strictly positive. Since the displayed sum is zero and all $n_i>0$, no such component occurs and every summand vanishes. Therefore $p_a(C_i)=0$ and $C_i^2=-2$ for every component. [F1, F3, step 1.1, step 1.2, algebra]

2.3 Suppose $D$ is irreducible and singular. Step 1.1 and the section make $D$ reduced, and adjunction gives $p_a(D)=1$ from $D^2=K_S\cdot D=0$. By [F6], its smooth normalization has genus zero and its entire defect is one, at a single singular point $p$. Write $R=\mathcal O_{D,p}$ and $B=(\nu_*\mathcal O_{\widetilde D})_p$, a finite semilocal normalization algebra, so $\dim_{\mathbb C}(B/R)=1$. Complete this finite-module exact sequence using [F7]. The completion of $B$ is $\prod_{j=1}^r\mathbb C\llbracket t_j\rrbracket$: its finitely many maximal ideals are the points above $p$, their adic filtrations are cofinal with the $\mathfrak m_RB$ filtration, and the Chinese remainder theorem separates their completions. Cofinality follows because the radical of the finite-dimensional algebra $B/\mathfrak m_RB$ is nilpotent; choosing finitely many nilpotent generators and expanding a sufficiently high product proves that nilpotence directly. Each local normalization ring is a smooth-curve DVR with residue $\mathbb C$, whose completion is $\mathbb C\llbracket t_j\rrbracket$ by successive uniformizer coefficients. Thus $\widehat R$ embeds as a codimension-one subring in that product. [F3, F6, F7, step 1.1, algebra, construct]

3.1 Form the dual intersection graph $G$: its vertices are the components $C_i$, and there are $C_i\cdot C_j$ edges between distinct vertices $i,j$. It is connected, loopless, and may have multiple edges. Its matrix from [F5] is exactly the intersection matrix of the components; steps 1.2 and 2.1 supply negative semidefiniteness, one-dimensional kernel, and positive kernel vector. The graph lemma therefore makes $G$ one of $\widetilde A_n$ ($n\ge1$), $\widetilde D_n$ ($n\ge4$), or $\widetilde E_6,\widetilde E_7,\widetilde E_8$. The fiber multiplicities $(n_i)$ have greatest common divisor one by step 1.1, so they are the primitive positive null vector of that graph. [F1, F5, step 1.1, step 1.2, step 2.1]

3.2 Every element of $\widehat R$ has the same constant on each branch. This equal-constant subspace has codimension $r-1$, so $r\le2$. If $r=2$, the codimension-one hypothesis forces equality with $\{(a(t),b(u)):a(0)=b(0)\}$, the ring $\mathbb C\llbracket X,Y\rrbracket/(XY)$ via $X=(t,0)$, $Y=(0,u)$. If $r=1$, no element of $\widehat R$ can have a nonzero linear $t$ coefficient: formal compositional inversion of such an element, whose coefficients are determined recursively, would put $t$ in the complete local ring $\widehat R$, and then every formal series in $t$ would lie there, contradicting codimension one. Therefore $\widehat R\subset\mathbb C+t^2\mathbb C\llbracket t\rrbracket$, and equal codimensions force equality. Splitting even and odd powers identifies the latter ring with $\mathbb C\llbracket X,Y\rrbracket/(Y^2-X^3)$ via $X=t^2$, $Y=t^3$. In particular the completed embedded plane equation has multiplicity two. Indeed an isomorphism of either displayed ring with $\widehat R=\mathbb C\llbracket x,y\rrbracket/(\widehat f)$ lifts its two generators to formal ambient coordinates; their independent classes modulo the squared maximal ideal make the linear Jacobian invertible, and recursive degree inversion gives a formal ambient automorphism. Its kernel identifies the principal equations up to a unit. [F6, step 2.3, algebra, construct]

4.1 For $\widetilde A_1$, the two rational components have intersection number two: if they meet at two distinct transverse points the fiber is $I_2$, while if they meet at one point with intersection multiplicity two the fiber is type III. For $\widetilde A_2$, the three rational components meet pairwise once: three distinct intersection points form the cycle $I_3$, while a common triple point gives type IV. A cycle $\widetilde A_n$ with $n\ge3$ is $I_{n+1}$; $\widetilde D_4$ and $\widetilde D_{n+4}$ ($n\ge1$) give $I_0^*$ and $I_n^*$; the primitive null vectors on $\widetilde E_6,\widetilde E_7,\widetilde E_8$ give IV*, III*, II*, respectively. [F5, step 3.1, algebra]

4.2 By [F7], the analytic local ring of $D$ has a convergent plane equation $f(x,y)$ with the completion in step 3.2. Its quadratic jet is nonzero, so choose a linear $y$ direction with nonzero quadratic coefficient and apply [F8]. Completing the analytic square in its prepared quadratic gives $Y^2+c(x)=0$, with $c(0)=c'(0)=0$. In the formal node case of step 3.2, the quadratic form has rank two, so $c$ has exact order two. In the formal cusp case, the quadratic form has rank one and the cubic jet is nonzero on its null line, so $c$ has exact order three. These two jet properties are preserved by the formal ambient coordinate changes and units in step 3.2: linear changes preserve quadratic rank; on the null line of a rank-one quadratic form $L^2$, degree-three contributions from a quadratic coordinate correction have the factor $L$, while those from a linear unit correction have the factor $L^2$, so both vanish there. The canonical cusp $y^2-x^3$ has the asserted nonzero restricted cubic. Thus $c=x^ku(x)$ with $k=2$ or $3$ and $u(0)\ne0$. An analytic square root of $-u$ from [F8] rescales $Y$ to give $Y^2-x^k=0$. These are a node and an ordinary cusp, respectively. With the rational normalization and unique singular point from step 2.3, they give exactly the geometric fibers $I_1$ and II. [F6, F7, F8, step 2.3, step 3.2, algebra, construct]

5.1 Steps 3.1 and 4.1 give every reducible fiber and its primitive multiplicities; steps 2.3, 3.2 and 4.2 give every irreducible singular fiber. Step 1.1 excludes multiple fibers. These are all the types in the unchanged Statement. The argument classifies only the geometric fiber configurations and assigns no additional physical data. No local minimal Weierstrass existence or valuation-table derivation is required. [step 1.1, step 3.1, step 4.1, step 4.2, algebra] ∎

## Source-reported local valuation table

For a local equation $y^2=x^3+f(t)x+g(t)$ over a disk with local coordinate $t$, let $\Delta(t):=4f(t)^3+27g(t)^2$. Define $\operatorname{ord}_t h$ for a nonzero holomorphic germ $h$ to be the least exponent with nonzero coefficient in its power series at $t=0$, and set $\operatorname{ord}_t(0)=+\infty$. For a minimal such equation in characteristic zero, the following valuation assignment is reported in the cited fiber-classification tables; minimality here means $\operatorname{ord}_t f<4$ or $\operatorname{ord}_t g<6$. An inequality such as $\ge2$ is a lower bound, not an equality. The table is not used in the proof above; no independent derivation of the table is supplied here.

| Type | $\operatorname{ord}_t f$ | $\operatorname{ord}_t g$ | $\operatorname{ord}_t\Delta$ |
|---|---:|---:|---:|
| $I_n$ ($n\ge1$) | $0$ | $0$ | $n$ |
| II | $\ge1$ | $1$ | $2$ |
| III | $1$ | $\ge2$ | $3$ |
| IV | $\ge2$ | $2$ | $4$ |
| $I_0^*$ | $\ge2$ | $\ge3$ | $6$ |
| $I_n^*$ ($n\ge1$) | $2$ | $3$ | $n+6$ |
| IV* | $\ge3$ | $4$ | $8$ |
| III* | $3$ | $\ge5$ | $9$ |
| II* | $\ge4$ | $5$ | $10$ |

The valuation table is supplementary source context and is not used in the geometric classification proof.

## Fiber graph diagrams

The parallel edges in $\widetilde A_1$ represent total intersection number two; the cycle in $\widetilde A_2$ represents one intersection for each pair. These diagrams visualize the two ambiguous graph cases only; the proof uses intersection numbers and local equations, not the diagrams.

```tikz
\begin{tikzpicture}[scale=0.8, every node/.style={circle,draw,inner sep=2pt}]
\node (a) at (0,0) {$\alpha_0$};
\node (b) at (2,0) {$\alpha_1$};
\draw (a) to[bend left=25] (b);
\draw (a) to[bend right=25] (b);
\node at (1,-0.8) {$\widetilde A_1$};
\end{tikzpicture}
\qquad
\begin{tikzpicture}[scale=0.8, every node/.style={circle,draw,inner sep=2pt}]
\node (a) at (0,0) {$\alpha_0$};
\node (b) at (2,0) {$\alpha_1$};
\node (c) at (1,1.6) {$\alpha_2$};
\draw (a)--(b)--(c)--(a);
\node at (1,-0.6) {$\widetilde A_2$};
\end{tikzpicture}
```

The affine Dynkin graph specifies the geometric reducible-fiber configuration together with its primitive multiplicities. The theorem does not infer a gauge group from Kodaira type without the additional function-field monodromy test.

## Scope limitations

Projectivity is the workspace's declared genus-one-fibration convention, used for the exact adjunction and proper-normalization inputs. The proof establishes the complete geometric classification without assuming local minimal Weierstrass models. The separate valuation table is source context outside the Statement and is not used as a mathematical supplier.
