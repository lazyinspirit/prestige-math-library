---
id: lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots
kind: lemma
title: "A fixed cap product glues by unique transverse flow roots"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, lem-holonomy-germ-is-independent-of-the-foliation-chart-chain, lem-c2-inverses-and-scalar-return-roots, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, lem-manifold-bump-for-a-compact-set-inside-an-open-set, lem-c1-euclidean-maximal-flow-with-c2-upgrade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 4
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Brittenham, Foliations and the Topology of 3-manifolds, class 11"
      url: "https://www.math.unl.edu/~mbrittenham2/papers/folnotes/lecs_11_to_20.pdf"
      locator: "Class 11 pp.1–3 motivates finite induction; complete new port construction is local, in the companion memo"
    - title: "S. P. Novikov, The Topology of Foliations (complete English translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "§6, printed pp. 16–19 (fixed-disk transport setting); joint C² transport and compact-range exact-collar adaptation are supplied locally"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a $C^2$
codimension-one regular foliation of a manifold $M$, let $W$ be a compact disk,
let $B:W\to L$ be a $C^2$ map into one leaf $L$, and let $V$ be a fixed smooth
vector field, positively transverse to $F$, on a neighbourhood of the compact
image $B(W)$, with flow $\Phi$. Suppose the cap continuation is finite and
holonomy-trivial: finitely many flat foliation boxes cover $B(W)$, a finite
cell subdivision of $W$ carries each closed cell into one box, and plaque
continuation of a fixed positively oriented $C^2$ transversal $\tau$ through $B(x_*)$ along
$B$-paths is independent of the path near $t=0$, with endpoint $T_x(t)$.

Then there are a uniform open interval $J=(-r,r)$ about $0$ and a jointly $C^2$
map $P:W\times J\to M$ with $P(x,0)=B(x)$, such that every slice $P(\cdot,t)$
lies in a single leaf, every track $P(x,\cdot)$ is positively transverse to
$F$, and
$$dP^{-1}(TF)=TW=\ker(dt).$$
Moreover, if $C\subseteq W$ is a collar region carrying a $C^2$ trace $f_C$
with $f_C(x)=T_x(t_C(x))$ for a section $t_C:C\to J$ and if each point of
$f_C$ is obtained by projecting along the short $V$-orbit segment of $B(x)$ used in the construction, then
$P(x,t_C(x))=f_C(x)$ pointwise on $C$.

## Facts & Assumptions

**Given:** A $C^2$ codimension-one foliation $F$, a compact disk $W$ with a $C^2$ cap $B:W\to L$, a fixed smooth positively transverse field $V$ near $B(W)$, and a finite holonomy-trivial cap continuation with transported transversals $T_x(t)$ as in the statement.

[F2] For a $C^2$ field on an open set of $\mathbb R^n$ the maximal flow is jointly $C^2$, its time slices are local $C^2$ diffeomorphisms, and at a regular point the flow box is $C^2$ ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F3] If $g(s,t)$ is $C^2$ near $(s_0,t_0)$, $g(s_0,t_0)=0$ and $g_t(s_0,t_0)\neq0$, then there is a unique local $C^2$ root $t=T(s)$ with $T'=-g_s/g_t$; the same inverse-function argument gives a $C^2$ root depending jointly on additional $C^2$ parameters ([[lem-c2-inverses-and-scalar-return-roots]]).

[F4] Every finite plaque transport between $C^2$ local transversals of a $C^2$ foliation atlas is a $C^2$ local diffeomorphism germ ([[lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]]).

[F5] The holonomy germ of a leafwise path is independent of the foliation chart chain ([[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]]).

[F6] The standing hypothesis is Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Use the fixed smooth field $V$ supplied in the statement. Choose finitely many smaller foliation boxes covering $B(W)$, with compact cores and larger boxes still inside the domain of $V$. Sign their transverse coordinates so $dz_j(V)>0$ on the larger boxes. No foliation-coordinate field is asserted to be smooth, and $V$ is not replaced. [given]

1.2 The transported transversals. Use the supplied positively oriented $C^2$ transversal $\tau$ at $B(x_*)$ and a finite subdivision of $W$ into closed cells each mapped by $B$ into one box of the cover. Along the tree of cells, plaque continuation of $\tau$ defines for every cell $c$ a $C^2$ map $(x,t)\mapsto T_x(t)$ on $c\times J_0$, for some interval $J_0$ about $0$, with $T_x(0)=B(x)$; this uses the finite holonomy-trivial continuation hypothesis. Path independence of the germ away from the basepoint is [F5], and the regularity of each finite transport is [F4], so the assignment is $C^2$ in $(x,t)$ on each cell and the assigned pieces agree on overlaps. A finite intersection of the finitely many domains of definition gives one uniform interval $J_0=(-\delta_0,\delta_0)$ on which all these transports are defined. [given, F4, F5]

2.1 In smooth ambient charts, [F2] supplies the local flow of $V$; uniqueness glues the finitely many formulas near the compact image $B(W)$. Shrink one common time interval so these flow segments stay in the relevant larger boxes. The flow is jointly $C^2$, and $s\mapsto z_j(\Phi_s(B(x)))$ is strictly increasing on each such short segment. Completeness is unnecessary. [F2, step 1.1]

3.1 Reduction of the root equation to one cell. Fix a cell $c$ contained in a box $U$ with transverse coordinate $z$, and put $G(s,x,t):=z(\Phi_s(B(x)))-\zeta(x,t)$, where $\zeta(x,t):=z(T_x(t))$ is jointly $C^2$ on $c\times J_0$. Since $B$ maps $c$ into one plaque of $U$, the value $z(B(x))$ is constant on $c$, and $\zeta(x,0)=z(B(x))$; since $T_x(t)$ is transported along a positive transverse direction, $\partial_t\zeta>0$ on $c\times J_0$. Finally $\partial_sG(0,x,t)=dz(V)(B(x))>0$, because $V$ is positively transverse. [step 2.1, step 1.2, given]

4.1 At $(s,x,t)=(0,x,0)$ the root equation has value zero and $\partial_sG>0$. Apply [F3] there, with $x,t$ as parameters, and cover each compact cell by finitely many of the resulting parameter neighborhoods. Shrink the common t-interval and the flow-time bound so every root remains in the short segment where $\partial_sG>0$. Uniqueness then pastes these local root functions into one jointly $C^2$ function $s_c(x,t)$ on an open neighborhood of each cell times one interval $J$. Take the finite intersection of all such intervals. [F3, step 2.1, step 3.1]

5.1 On an overlap use a common smaller box around $B(x)$. The continuation data assign the same local plaque there, not just the same global leaf: transition of the transverse coordinate sends the label in one chart to the label in the other. For variable x in this overlap the central plaque label is fixed, so the equality of transverse transition germs holds on one neighborhood in x and one short interval in t; finite compact covers of the cell faces give a common interval. Both root points lie on the same short V-segment in this box and have this identical plaque label. Strict monotonicity in step 2.1 therefore gives equal flow times. Since the formulas hold on open cell neighborhoods, [F4] pastes $P(x,t)=\Phi_{s_c(x,t)}(B(x))$ jointly $C^2$ on $W\times J$. [given, F4, step 2.1, step 1.2, step 4.1]

6.1 Properties of $P$. Clearly $P(x,0)=\Phi_{s_c(x,0)}(B(x))$ and $s_c(x,0)=0$ because $G(0,x,0) = z(B(x))-\zeta(x,0)=0$ and the root is unique; hence $P(x,0)=B(x)$. For fixed $t$ all points $P(x,t)$ lie in the single leaf $L_t$ containing $\tau(t)$, since they lie in the leaf containing $T_x(t)$ and each $T_x(t)$ is obtained from $\tau(t)$ by plaque continuation; hence every slice lies in one leaf, and $\partial_xP$ is tangent to $F$. For the $t$-direction, differentiating $G(s_c(x,t),x,t)=0$ gives $\partial_ts_c=-\partial_tG/\partial_sG=\partial_t\zeta/\partial_sG>0$, so $\partial_tP=\partial_ts_c\cdot V(\Phi_{s_c}(B(x)))$ is a positive multiple of the positively transverse field $V$; hence every track is positively transverse and $dP^{-1}(TF)=TW=\ker(dt)$. [step 5.1, given]

6.2 Exact collar factorization. Let $C\subseteq W$ and $f_C(x)=T_x(t_C(x))$ with $t_C(C)\subseteq J$ be as in the statement, and suppose each $f_C(x)$ is obtained by projecting along the short $V$-orbit segment of $B(x)$ used in the construction, so that $f_C(x)=\Phi_{\sigma(x)}(B(x))$ for some $\sigma(x)$ in the same short flow-time domain. Then $f_C(x)$ lies in the leaf containing $T_x(t_C(x))$, and on the $V$-orbit of $B(x)$ the equation $z(\Phi_s(B(x)))=\zeta(x,t_C(x))$ is satisfied at $s=\sigma(x)$; by uniqueness of the root in step 4.1, $\sigma(x)=s(x,t_C(x))$ and therefore $P(x,t_C(x))=\Phi_{s(x,t_C(x))}(B(x))=f_C(x)$ pointwise on $C$. [step 4.1, step 5.1]

7.1 The construction used finitely many boxes, finitely many cells, finitely many bumps and finitely many local roots, so it makes only finitely many choices; the root and flow theorems of [F2] and [F3] are choice-free, and the standing hypothesis [F6] is not used beyond the pair's interface. This proves the statement. [step 6.1, step 6.2, F6] ∎
