---
id: lem-koszul-resolution-and-flat-fibre-restriction
kind: lemma
title: "Koszul resolutions and restriction to flat fibres"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-deformation-to-the-normal-cone-and-specialization
  - def-locally-free-sheaf-finite-rank
  - lem-k-zero-vector-bundles-versus-coherent-sheaves
  - lem-smooth-immersion-normal-sequence-and-deformation-charts
  - thm-regular-sequences-give-acyclic-koszul-complexes
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, More on Algebra and Algebra: Koszul complexes and regular sequences (tags 0621, 00LX)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
      locator: "Regular sequences and Koszul complexes (tag 00LX); the conormal sequence and regular immersions (tag 0621)"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry, Class 19"
      url: "https://math.stanford.edu/~vakil/245/245class19.pdf"
      locator: "Class 19, Sections 2.1-2.2: vector-bundle tensoring of Koszul resolutions and restriction of resolutions in the deformation blowup"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the finite
coherent-resolution and cohomological suppliers. A section $s$ of a rank-$d$
bundle $Q$ is a **regular section** here if, at each point of its zero scheme
$Z(s)$, some local frame expresses $s$ by $d$ components forming a regular
sequence of length $d$ in the local ring. Under this hypothesis it has exact
Koszul resolution
$\bigwedge^dQ^\vee\to\cdots\to Q^\vee\to\mathcal O\to\mathcal O_{Z(s)}\to0$.
Tensoring with a vector bundle preserves it. If a coherent sheaf $H$ has a
finite locally free resolution on a scheme and $t$ is a Cartier equation acting
injectively on $H$, restricting the resolution to $t=0$ remains exact and
resolves $H/tH$. In the deformation blowup for a closed embedding of smooth
quasi-projective varieties $i:X\hookrightarrow Y$, let $E$ be a finite
locally free sheaf on $X$. The strict transform
$F:X\times\mathbb P^1\hookrightarrow M$ is disjoint from
$B=\operatorname{Bl}_XY$, and a resolution of $F_*\operatorname{pr}_X^*E$
restricts exactly to the ordinary $Y$ fibre and to
$P=\mathbb P_{\mathrm{lines}}(N\oplus1)$; on $B$ it is an exact complex.

## Facts & Assumptions

**Given:** the Axiom of Choice; a rank-$d$ vector bundle $Q$ on a scheme with a section $s$ whose $d$ local components form a regular sequence of length $d$ at every point of $Z(s)$; a coherent sheaf $H$ with a finite locally free resolution and a Cartier equation $t$ acting injectively on $H$; a closed embedding $i:X\hookrightarrow Y$ of smooth quasi-projective varieties and a finite locally free sheaf $E$ on $X$; the deformation blowup $M=\operatorname{Bl}_{X\times\{\infty\}}(Y\times\mathbb P^1)$ of [[def-deformation-to-the-normal-cone-and-specialization]].

[L1] A sequence $a_1,\dots,a_d$ is regular on a module $M$ if each $a_i$ is a nonzerodivisor on $M/(a_1,\dots,a_{i-1})M$; the Koszul complex of a regular sequence has zero positive homology, and its mapping-cone construction inducts on $d$ ([[thm-regular-sequences-give-acyclic-koszul-complexes]]). Away from $Z(s)$ some component is a unit in the local ring.

[L2] On a regular quasi-projective scheme of finite type over a field, every coherent sheaf has a finite locally free resolution, and tensoring with a vector bundle preserves exactness of complexes of vector bundles ([[lem-k-zero-vector-bundles-versus-coherent-sheaves]], [[def-locally-free-sheaf-finite-rank]]).

[L3] The deformation blowup $M$ is smooth and quasi-projective with strict transform $F$ isomorphic to $X\times\mathbb P^1$; it is flat over $\mathbb P^1$ with ordinary fibres $Y$; the open $M\setminus B$ has special fibre $C_XY$, while the complete fibre at infinity is the union $B+\mathbb P(N\oplus1)$ with intersection $\mathbb P(N)$ ([[def-deformation-to-the-normal-cone-and-specialization]], [[lem-smooth-immersion-normal-sequence-and-deformation-charts]]).

## Proof

**Proof technique:** direct; prove Koszul exactness by the mapping-cone induction, derive fibre restriction from the vanishing of Tor against a principal quotient, and apply both to the deformation blowup.

1.1 Koszul exactness. At a point of $Z(s)$ choose the frame in the hypothesis and let $K(a_1,\dots,a_d;M)$ be the Koszul complex. For $d=0$ it is $M$ in degree zero. For $d>0$, by [L1] it is the mapping cone of multiplication by $a_d$ from $K(a_1,\dots,a_{d-1};M)$ to itself, so its long exact homology sequence identifies $H_i(K(a_1,\dots,a_d))$ with the kernel and cokernel of the map induced by $a_d$ on $H_*(K(a_1,\dots,a_{d-1}))$; by induction $a_d$ acts on the only nonzero homology $H_0=M/(a_1,\dots,a_{d-1})M$ as a nonzerodivisor, so the only nonzero homology of the full complex is $H_0=M/(a_1,\dots,a_d)M$ and the complex resolves that quotient. At a point outside $Z(s)$ a component $a_j$ is a unit; if $e_j$ is the corresponding exterior generator, the homotopy $h(v)=a_j^{-1}e_j\wedge v$ satisfies $\partial h+h\partial=\operatorname{id}$ by the contraction differential, so the complex is exact there and resolves the zero stalk. The construction is canonical under change of frame, because exterior powers and contraction by $s$ are, so the local complexes glue to the global resolution $\bigwedge^dQ^\vee\to\cdots\to Q^\vee\to\mathcal O\to\mathcal O_{Z(s)}\to0$; tensoring with a vector bundle $W$ preserves exactness and produces the resolution of $W|_{Z(s)}$ twisted by the Koszul terms. [L1, L2, given, algebra]

1.2 Restriction to a flat fibre. Let $0\to H_n\to\cdots\to H_0\to H\to0$ be a finite locally free resolution and let $t$ be a Cartier equation acting injectively on $H$; since the $H_i$ are locally free, $t$ acts injectively on each of them. Tensoring with the two-term resolution $0\to\mathcal O\xrightarrow{t}\mathcal O\to\mathcal O/(t)\to0$ of the principal quotient and computing Tor, the identity $\operatorname{Tor}_1(H,\mathcal O/(t))=\ker(t:H\to H)=0$ together with the snake lemma applied to the short exact sequences of complexes shows that $\operatorname{Tor}_i(H,\mathcal O/(t))=0$ for all $i>0$, and the complex $H_\bullet/tH_\bullet$ is exact with $H_0(H_\bullet/tH_\bullet)=H/tH$. Hence the restricted complex $H_\bullet|_{t=0}$ remains exact and resolves $H/tH$; the essential extra hypothesis is injectivity on $H$: injectivity on the locally free terms alone does not suffice. [L2, given, algebra]

2.1 The deformation blowup. By [L3], $M$ is smooth and quasi-projective over the field, so every coherent sheaf on $M$ has a finite locally free resolution by [L2]; the strict transform $F$ is isomorphic to $X\times\mathbb P^1$ and meets the fibre at infinity in the section $[0:1]$ of $P=\mathbb P(N\oplus1)$, while it is disjoint from $B=\operatorname{Bl}_XY$, since $B$ meets $P$ in $\mathbb P(N)$ and the strict transform of $X\times\mathbb P^1$ lies over $X\times\{\infty\}$ inside the exceptional component. On the chart where the infinity fibre is Cartier with equation $t$, the ordinary fibre $Y$ has equation $t-1$, and both act injectively on the coherent sheaf $F_*\operatorname{pr}_X^*E$, since on its support $F\cong X\times\mathbb P^1$ they are parameter equations on the second factor and $\operatorname{pr}_X^*E$ is locally free there. This sheaf need not be locally free on $M$. Near its intersection with $P$ the component $B$ is absent, so the Cartier equation of $P$ agrees with that of the infinity fibre; step 1.2 therefore restricts a finite locally free resolution of $F_*\operatorname{pr}_X^*E$ exactly to the ordinary fibre and to $P$, where the restricted complex resolves the restrictions of the sheaf. Near $B$ the sheaf is zero, and a bounded exact complex of vector bundles resolving the zero sheaf is split exact by induction on its length, starting from the last cokernel; hence the restriction of the resolution to $B$ is an exact complex, as asserted. [L2, L3, step 1.1, step 1.2, algebra] ∎ 