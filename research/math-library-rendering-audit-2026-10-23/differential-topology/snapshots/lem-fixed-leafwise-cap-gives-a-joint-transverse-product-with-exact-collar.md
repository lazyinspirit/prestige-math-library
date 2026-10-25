---
id: lem-fixed-leafwise-cap-gives-a-joint-transverse-product-with-exact-collar
kind: lemma
title: "A fixed leafwise cap gives a joint transverse product with exact collar data"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice-principle-for-foliation-pair, def-regular-foliation-atlas, def-flat-chart-for-a-distribution, def-plaque-of-a-flat-chart, def-leaf-of-a-regular-foliation, def-simply-connected, def-based-loops-and-fundamental-group, def-holonomy-representation-and-holonomy-group-of-a-leaf, thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints, thm-heine-borel-rn, lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity, lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots, lem-manifold-bump-for-a-compact-set-inside-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations, English translation by J. A. Zilber"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "§6, printed pp. 16–19 (fixed-disk transport setting); joint C² transport and compact-range exact-collar adaptation are supplied locally in the center–saddle carrier memo"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice-principle-for-foliation-pair]]). Let $F$ be a $C^2$
cooriented codimension-one regular foliation of a $3$-manifold $M$, let $W$ be a compact
disk, and let $B:W\to L$ be a $C^2$ map into one leaf. Fix $x_*\in W$ and a
$C^2$ transversal $\tau:(-\delta,\delta)\to M$ through $B(x_*)$. Plaque
continuation of $\tau$ along $B\circ q$, for a path $q$ from $x_*$ to $x$, is
independent of $q$ near $t=0$ because $B$ maps the simply connected disk into
one leaf; write $T_x(t)$ for the endpoint in the transported transversal at
$B(x)$.

Then there are a uniform interval $J=(-r,r)$ and a jointly $C^2$ map
$P:W\times J\to M$ with $P(x,0)=B(x)$, leaf-valued slices $P(\cdot,t)$ and
transverse tracks $P(x,\cdot)$, such that
$$dP^{-1}(TF)=TW=\ker(dt).$$
The uniform interval is constructed from the fixed cap before any actual
section range is checked. Let $C\subseteq W$ be a prescribed collar region
with a $C^2$ trace $f_C$ and its actual holonomy-trivialized section $t_C$, so
that $f_C(x)=T_x(t_C(x))$ and each $f_C(x)$ is obtained from $B(x)$ by
projection along the short flow segments of a fixed smooth positively transverse field $V$ near $B(W)$. If a smaller closed
collar $C_0\subseteq C$ has compact section range $S=t_C(C_0)\Subset J$,
choose an open interval $I$ with $S\Subset I\Subset J$. Then the restriction of
$P$ to $W\times I$ satisfies $P(x,t_C(x))=f_C(x)$ pointwise on $C_0$ and on
its interior. The boundary section may be nonzero. If $C$ is a collar of
$\partial W$ and $t_C=0$ there, continuity gives such a $C_0$ as a special
case.

## Facts & Assumptions

**Given:** A $C^2$ codimension-one foliation $F$ of a $3$-manifold $M$, a compact disk $W$, a $C^2$ cap $B:W\to L$, a $C^2$ transversal $\tau$ through $B(x_*)$, and a collar region $C\subseteq W$ with trace $f_C$ and section $t_C$ as in the statement.

[F1] A compact disk is simply connected, and a based loop in a simply connected space is null-homotopic relative to its basepoint ([[def-simply-connected]], [[def-based-loops-and-fundamental-group]]).

[F2] Holonomy germs of leafwise paths between fixed endpoint transversals depend only on the leafwise homotopy class relative to endpoints ([[thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints]]), and the holonomy representation is the homomorphism into transverse germs of [[def-holonomy-representation-and-holonomy-group-of-a-leaf]].

[F3] A finite plaque transport between $C^2$ local transversals of a $C^2$ foliation atlas is a $C^2$ local diffeomorphism germ ([[lem-c2-plaque-transport-and-transverse-fences-preserve-c2-regularity]]).

[F4] A fixed leafwise cap together with a fixed smooth positively transverse field and a finite holonomy-trivial continuation admits a jointly $C^2$ transverse product obtained by unique short flow roots, and the exact collar factorization holds when the trace is expressed in the transported coordinate with range in the uniform interval and is obtained by projecting along the flow orbits ([[lem-fixed-cap-transverse-product-glues-by-unique-transverse-flow-roots]]).

[F5] If $K\subseteq M$ is compact inside an open $W\subseteq M$ in a smooth manifold, there is a smooth bump equal to $1$ near $K$ with support in $W$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F6] Plaques of a flat chart are the connected components of the level sets of the transverse coordinate, and leaves are the plaque-chain sets ([[def-flat-chart-for-a-distribution]], [[def-plaque-of-a-flat-chart]], [[def-leaf-of-a-regular-foliation]], [[def-regular-foliation-atlas]]).

[F7] Closed bounded subsets of $\mathbb R^3$ are compact ([[thm-heine-borel-rn]]).

[F8] The standing hypothesis is Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]).

## Proof

**Proof technique:** direct.

1.1 Independence of the path. Let $q,q'$ be two paths in $W$ from $x_*$ to $x$; then $q*q'^{-1}$ is a based loop at $x_*$, null-homotopic in the disk $W$ by [F1]. Composing the null-homotopy with the $C^2$ map $B$ gives a leafwise homotopy in $L$ relative to endpoints between the corresponding leafwise paths, so by [F2] the holonomy germs agree: the transported transversal at $B(x)$ is independent of $q$ near $t=0$. By [F3] each finite transport is a $C^2$ local diffeomorphism germ, so in each fixed local endpoint transversal the finite chart formulas are $C^2$. Subdivide the compact parameter disk into finitely many cells mapping into boxes, and use their finitely many edge-loop relations to choose one common interval $J_0=(-\delta_0,\delta_0)$; label transitions agree on open cell neighborhoods as in [F4]. [given, F1, F2, F3]

2.1 Use the fixed smooth field V of any prescribed collar data. When no collar data are prescribed, construct such a field near the compact image: in smooth ambient charts choose constant fields with positive transverse evaluation on smaller domains, and sum finitely many nonnegative compact-set bumps from [F5] whose cores cover the image. Positivity is an open convex condition and coorientation fixes its sign. A field obtained this way is smooth in the ambient smooth charts; no C² foliation-coordinate field is called smooth. If τ is negatively oriented, apply the positive-transversal construction to $t\mapsto\tau(-t)$ and reverse the parameter again in the final product. [given, F5, F6, step 1.1]

3.1 Finite continuation data. Because $B(W)$ is compact and covered by finitely many flat boxes, a finite subdivision of the disk $W$ into closed cells carries each cell into one box; combined with step 1.1 this is exactly the finite holonomy-trivial cap continuation required as a hypothesis of [F4]. [step 1.1, step 2.1, F6]

4.1 The product. Applying [F4] to the compact disk $W$, the cap $B$, the field $V$ of step 2.1 and the continuation data of step 3.1 produces a uniform interval $J=(-r,r)\subseteq J_0$ and a jointly $C^2$ map $P:W\times J\to M$ with $P(x,0)=B(x)$, leaf-valued slices, transverse tracks and $dP^{-1}(TF)=TW=\ker(dt)$; the interval $J$ is fixed by the finitely many flow-root data of the cap before any collar section is examined. [step 2.1, step 3.1, F4]

5.1 Exact collar range bookkeeping. Let $C_0\subseteq C$ be a closed collar with $S=t_C(C_0)\Subset J$. The set $S$ is compact, because $C_0$ is compact and $t_C$ is continuous, and $S$ is contained in the open interval $J$ with positive distance from its endpoints; hence there is an open interval $I$ with $S\Subset I\Subset J$. For $x\in C_0$ one has $t_C(x)\in S\subseteq I\subseteq J$, so $P(x,t_C(x))$ is defined, and $f_C(x)=T_x(t_C(x))$ lies in the transported leaf with label $t_C(x)$; the exact collar clause of [F4], whose projection hypothesis on $f_C$ is part of the data, therefore gives $P(x,t_C(x))=f_C(x)$ for every $x\in C_0$, hence also on the interior of $C_0$. [step 4.1, F4, F7]

6.1 Boundary-zero special case. If $C$ is a collar of $\partial W$ and $t_C=0$ on the boundary collar, then by continuity of $t_C$ the section range of a sufficiently thin closed collar $C_0\subseteq C$ around $\partial W$ is arbitrarily close to $0$; since $J$ is an open interval about $0$, such a $C_0$ satisfies $t_C(C_0)\Subset J$, so step 5.1 applies. [step 5.1, F7]

7.1 The construction of $P$ and of the range interval used finitely many boxes, cells, bumps and local roots, so no choice beyond the standing hypothesis [F8] is invoked; steps 4.1–6.1 prove the statement. [step 4.1, step 5.1, step 6.1, F8] ∎
