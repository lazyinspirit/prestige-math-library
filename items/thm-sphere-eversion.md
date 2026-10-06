---
id: thm-sphere-eversion
kind: theorem
title: "Sphere eversion"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three, thm-smale-classification-of-sphere-immersions-in-euclidean-space, lem-the-second-homotopy-group-of-so-three-vanishes, thm-smale-hirsch-immersion-theorem, cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes, def-regular-homotopy-of-immersions, def-weak-homotopy-equivalence, def-immersion-submersion-and-constant-rank-map, def-countable-choice, thm-jordan-brouwer-separation, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (Harvard CMSA Math-Science Literature Lecture write-up, June 30 2022), §2.1 eversion paragraph"
      url: https://math.stanford.edu/~ralph/immersions-final.pdf
      locator: "PDF pp. 4–10; $\\operatorname{Imm}(S^2,\\mathbb R^3)$ is path connected and the sphere can be turned inside out"
    - title: "Allen Hatcher, Algebraic Topology, §4.2–4.3 and the smooth Jordan–Brouwer separation of spheres in $\\mathbb R^3$"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "printed pp. 375–440; homotopy invariance of degree and the separation statement used to identify the bounded side"
dependency_level: 14
---

## Statement

Assume $\mathrm{AC}_\omega$ for the existence and classification assertions.
The standard embedding $\iota:S^2\hookrightarrow\mathbb R^3$ is regularly
homotopic, through immersions $S^2\to\mathbb R^3$, to its inside-out reflection
$\iota\circ a$ (equivalently to $r\circ\iota$ for a reflection $r$ of
$\mathbb R^3$). More precisely, every two immersions $S^2\to\mathbb R^3$ are
regularly homotopic: the space $\operatorname{Imm}(S^2,\mathbb R^3)$ is path
connected, and a regular homotopy from $\iota$ to $\iota\circ a$ cannot be
chosen through embeddings (this last assertion uses AC, through the
Jordan–Brouwer separation theorem).

## Facts & Assumptions

**Given:** The unit sphere $S^2$, the standard embedding $\iota$, the antipodal map $a(x)=-x$, a reflection $r$ of $\mathbb R^3$, the space $\operatorname{Imm}(S^2,\mathbb R^3)$ with the weak compact-open $C^\infty$ topology, and the formal-immersion space $\operatorname{FImm}(S^2,\mathbb R^3)$.

[F1] The formal data of $\iota$ and of $\iota\circ a$ are homotopic: they lie in the same path component of $\operatorname{FImm}(S^2,\mathbb R^3)$, and the difference class in $\pi_2(V_2(\mathbb R^3))\cong\pi_2(\mathrm{SO}(3))$ vanishes. [[lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three]]

[F2] The derivative map $\operatorname{Imm}(S^2,\mathbb R^3)\to\operatorname{FImm}(S^2,\mathbb R^3)$ is a weak homotopy equivalence ($2<3$, compact closed source), hence induces a bijection on path components; for the compact source $S^2$, path components of $\operatorname{Imm}$ are the regular homotopy classes. [[thm-smale-hirsch-immersion-theorem]], [[cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes]], [[def-weak-homotopy-equivalence]]

[F3] All immersions $S^2\to\mathbb R^3$ are regularly homotopic, since $\pi_2(\mathrm{SO}(3))=0$ and $V_2(\mathbb R^3)\cong\mathrm{SO}(3)$; equivalently the immersion space is path connected by the classification theorem. [[thm-smale-classification-of-sphere-immersions-in-euclidean-space]], [[lem-the-second-homotopy-group-of-so-three-vanishes]]

[F4] A regular homotopy is a smooth family whose every slice is an immersion; a homotopy through embeddings is a smooth family whose every slice is injective and immersive, hence an embedding of the compact sphere. [[def-regular-homotopy-of-immersions]], [[def-immersion-submersion-and-constant-rank-map]]

[F5] Jordan–Brouwer separation (AC): the image of every embedding $S^2\hookrightarrow\mathbb R^3$ has exactly two complementary components, one bounded and one unbounded, with common boundary the image. [[thm-jordan-brouwer-separation]], [[def-axiom-of-choice]]

[F6] The divergence theorem for bounded $C^1$ Euclidean domains: for a bounded domain $B$ with $C^1$ boundary and the field $X=\tfrac13 x$, $\int_B\operatorname{div}X\,dV=\int_{\partial B}X\cdot n\,dA$, so the flux of $\tfrac13x$ through the outward-oriented boundary equals $\operatorname{vol}(B)$; with the opposite orientation the flux is $-\operatorname{vol}(B)$. [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

## Proof

1.1 $\iota$ and $\iota\circ a$ are regularly homotopic: by [F1] their formal data lie in one path component of $\operatorname{FImm}(S^2,\mathbb R^3)$, and the derivative map is a weak homotopy equivalence, hence a bijection on path components by [F2]; path components of $\operatorname{Imm}(S^2,\mathbb R^3)$ are the regular homotopy classes by [F2], so there is a regular homotopy $S^2\times[0,1]\to\mathbb R^3$ from $\iota$ to $\iota\circ a$. Follow this homotopy by $t\mapsto A_t\circ(\iota\circ a)$, where $A_t$ is a smooth rotation path from $I$ to $A=-r$. For a reflection in a plane with unit normal $u$, $A$ fixes $u$ and rotates $u^\perp$ by $\pi$, so rotation through $\pi t$ supplies this path. Reparametrizing both paths to be constant near their endpoints makes their concatenation smooth, with initial map $\iota$ and final map $r\circ\iota$. [F1, F2, F4]

1.2 $\operatorname{Imm}(S^2,\mathbb R^3)$ is path connected: by [F3] every two immersions of $S^2$ into $\mathbb R^3$ are regularly homotopic, and regular homotopies are paths in the immersion space by [F4]. [F3, F4]

1.3 No regular homotopy from $\iota$ to $r\circ\iota$ can be chosen through embeddings. Suppose $H:S^2\times[0,1]\to\mathbb R^3$ were such a family with every slice an embedding. Define the flux $S(t)=\int_{S^2}H_t^*\omega$, where $\omega$ is the $2$-form of the field $\tfrac13x$, that is, the integral over the parametrised surface of $\tfrac13H\cdot(\partial_1H\times\partial_2H)$ in positively oriented local coordinates. The integrand depends continuously on $(x,t)$ and $S^2\times[0,1]$ is compact, so $S$ is continuous. For each $t$, $H_t$ is a smooth embedding of the compact sphere, so by [F5] its image bounds a compact region $B_t$; the divergence theorem in the form of [F6] identifies $S(t)$ with $\pm\operatorname{vol}(B_t)$, the sign being $+$ or $-$ according to the orientation of the parametrisation, so $S(t)\ne0$ for every $t$; a continuous nonzero function on $[0,1]$ has constant sign. [F4, F5, F6]

2.1 Evaluating the two ends: for $H_0=\iota$ with the positively oriented coordinates of $S^2$ as the boundary of the unit ball, $\iota^*\omega$ is the outward-oriented flux form of $\tfrac13x$ through the unit sphere, whose integral is the volume $\tfrac{4\pi}{3}$ of the unit ball by [F6]. For $H_1=r\circ\iota$ or $H_1=\iota\circ a=(-I)\circ\iota$, the chain rule gives $\partial_i(r\circ\iota)=r\circ\partial_i\iota$, and the identity $(Au)\times(Av)=\det(A)A(u\times v)$ for either orthogonal map with determinant $-1$ shows that the pulled-back flux form changes sign: $\int_{S^2}(r\circ\iota)^*\omega=-\int_{S^2}\iota^*\omega=-\tfrac{4\pi}{3}$. Hence $S(0)>0>S(1)$, contradicting the constant sign forced in step 1.3. Therefore no homotopy from $\iota$ to $r\circ\iota$ through embeddings exists, every regular homotopy between them has non-injective slices, and the inside/outside labelling necessarily changes along any eversion. The existence assertion of the theorem is step 1.1 and the path-connectedness is step 1.2; the Jordan–Brouwer input of step 1.3 carries AC, while the existence and classification assertions inherit countable choice from Smale–Hirsch. [F5, F6, step 1.1, step 1.2, step 1.3] ∎
