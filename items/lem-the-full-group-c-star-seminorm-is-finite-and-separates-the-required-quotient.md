---
id: lem-the-full-group-c-star-seminorm-is-finite-and-separates-the-required-quotient
kind: lemma
title: Well-definedness of the full group C star norm and its zero ideal
deps:
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations
  - thm-gns-construction-for-topological-groups
  - lem-integrated-forms-are-nondegenerate-star-representations
  - def-c-star-algebra
  - thm-metric-completion-exists
  - thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra
  - def-banach-star-algebra-without-required-unit
  - lem-bounded-hilbert-operators-form-a-c-star-algebra
  - def-axiom-of-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the integrated-form and completion suppliers; the seminorm and completion computations add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Example F.4.2 and Definition F.4.3"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Definition 8.B.1 and Remark 8.B.2"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be an LCH group and define the local function
$$p_G(f):=\sup_{\pi}\|\pi(f)\|\qquad(f\in L^1(G)),$$
where one may take the set of GNS representations indexed by $P_1(G)$; this gives the same supremum as testing all strongly continuous unitary representations.  In this lemma write
$\|f\|_{C^*}:=p_G(f)$. Then
$\|f\|_{C^*}\le\|f\|_1<\infty$ for all $f$, so the supremum is finite;
$\|\cdot\|_{C^*}$ is a submultiplicative $\ast$-seminorm on $L^1(G)$; the set
$N=\{f:\|f\|_{C^*}=0\}$ is a closed two-sided $\ast$-ideal; and the completion
of $L^1(G)/N$ in the induced norm is a C\*-algebra in which
$\|a^*a\|=\|a\|^2$.
## Facts & Assumptions

**Given:** AC; an LCH group $G$ with fixed left Haar measure; the seminorm $\|\cdot\|_{C^*}$ defined as the supremum of operator norms of integrated forms.

[F1] For every unitary representation $\pi$, the integrated form is complex-linear, multiplicative, star-preserving and contractive: $\pi(f\ast h)=\pi(f)\pi(h)$, $\pi(f^*)=\pi(f)^*$ and $\|\pi(f)\|\le\|f\|_1$ ([[lem-integrated-forms-are-nondegenerate-star-representations]]).

[F2] $\mathcal B(H)$ is a C\*-algebra: $\|T^*T\|=\|T\|^2$ and $\|T^*\|=\|T\|$ for every bounded operator $T$ ([[lem-bounded-hilbert-operators-form-a-c-star-algebra]]).

[F3] $L^1(G)$ is a Banach $\ast$-algebra with $\|f\ast h\|_1\le\|f\|_1\|h\|_1$ and $\|f^*\|_1=\|f\|_1$ ([[thm-l1-of-a-locally-compact-group-is-a-banach-star-algebra]], [[def-banach-star-algebra-without-required-unit]]).

[F4] Under Countable Choice, every metric space has a completion given by equivalence classes of Cauchy sequences, with distance the limit of the distances of representatives and a dense isometric embedding by constant sequences ([[thm-metric-completion-exists]]). AC supplies this assumption. The defining algebraic and norm conditions of a C\*-algebra are those of [[def-c-star-algebra]].


[F5] Normalized positive-type functions form the set $P_1(G)\subseteq\mathbb C^G$, and their GNS triples are exactly the pointed cyclic representations with a unit cyclic vector ([[thm-gns-construction-for-topological-groups]], [[cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations]]). Under AC every closed Hilbert subspace has its orthogonal decomposition ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).
## Proof


**Proof technique:** direct.

**Given:** AC, an LCH group $G$, and the seminorm $\|f\|_{C^*}=\sup_\pi\|\pi(f)\|$.

1.1 The universal supremum is set-sized. Given a representation $\pi$ and a unit vector $\xi$, its cyclic subspace $M=\overline{\operatorname{span}}\{\pi(g)\xi:g\in G\}$ is invariant. Its orthogonal complement is invariant as well, because $\pi$ is unitary, so its projection commutes with every $\pi(g)$. The weak integral identity then shows that $\pi(f)M\subseteq M$. By [F5] the restricted pointed representation is equivalent to the GNS triple of its normalized coefficient in $P_1(G)$. Thus $\|\pi(f)\xi\|$ is bounded by the supremum of the integrated norms of these GNS representations. Taking the supremum over unit vectors, and observing that every GNS representation is itself eligible, proves equality with the universal supremum. The zero representation contributes only zero, and $P_1(G)$ is nonempty because it contains the constant function $1$. [F1, F5]

1.2 $\|\cdot\|_{C^*}$ is a finite submultiplicative $\ast$-seminorm on $L^1(G)$: for each $f$, F1 gives $\|\pi(f)\|\le\|f\|_1$ for every $\pi$, so $\|f\|_{C^*}\le\|f\|_1<\infty$; $\|\alpha f\|_{C^*}=|\alpha|\|f\|_{C^*}$ by linearity; $\|f+h\|_{C^*}\le\|f\|_{C^*}+\|h\|_{C^*}$ by the operator triangle inequality before taking the supremum; $N$ contains $0$; for $f,h\in L^1(G)$ and each $\pi$, $\|\pi(f\ast h)\|=\|\pi(f)\pi(h)\|\le\|\pi(f)\|\,\|\pi(h)\|\le\|f\|_{C^*}\|h\|_{C^*}$, so $\|f\ast h\|_{C^*}\le\|f\|_{C^*}\|h\|_{C^*}$; and $\|f^*\|_{C^*}=\sup_\pi\|\pi(f)^*\|=\sup_\pi\|\pi(f)\|=\|f\|_{C^*}$ by F1 and F2. [F1, F2]

2.1 $N=\{f:\|f\|_{C^*}=0\}$ is a closed two-sided $\ast$-ideal of $L^1(G)$: it is a linear subspace by the seminorm identities, and it is closed in the $L^1$ norm because $|\|f\|_{C^*}-\|h\|_{C^*}|\le\|f-h\|_{C^*}\le\|f-h\|_1$; if $f\in N$ and $h\in L^1(G)$ then step 1.2 gives $\|f\ast h\|_{C^*}\le\|f\|_{C^*}\|h\|_{C^*}=0$ and $\|h\ast f\|_{C^*}\le\|h\|_{C^*}\|f\|_{C^*}=0$, so $N$ is a two-sided ideal; and $f\in N$ implies $\|f^*\|_{C^*}=\|f\|_{C^*}=0$, so $N$ is a $\ast$-ideal. Hence $L^1(G)/N$ is a normed $\ast$-algebra with the induced norm and involution. [F3, step 1.2]

3.1 The C\*-identity holds on $L^1(G)$ and descends to the quotient: for every $f$, $\|f^*\ast f\|_{C^*}=\sup_\pi\|\pi(f)^*\pi(f)\|=\sup_\pi\|\pi(f)\|^2=\|f\|_{C^*}^2$, using multiplicativity, $\pi(f^*)=\pi(f)^*$ F1 and the C\*-identity in $\mathcal B(H)$ F2; in particular $\|[f]^*[f]\|=\|[f]\|^2$ for the coset $[f]$ in $L^1(G)/N$. [F1, F2, step 2.1]

4.1 Put $B=L^1(G)/N$ with its induced norm. Apply F4 to its norm metric, and define addition, scalar multiplication, multiplication and involution on Cauchy-sequence classes termwise. These operations are well defined: Cauchy sequences are bounded, and $\|x_ny_n-x_my_m\|\le\|x_n\|\,\|y_n-y_m\|+\|x_n-x_m\|\,\|y_m\|$ shows that products are Cauchy; the same estimate for equivalent representatives shows independence of representatives. The isometry of the involution from step 1.2 gives both its preservation of Cauchy sequences and independence of representatives; addition and scalar multiplication follow from their norm inequalities. The norm is $\|[x_n]\|=\lim_n\|x_n\|$, so submultiplicativity passes to the limit, as do the vector-space and star-algebra identities. Thus the complete metric space is a Banach $\ast$-algebra with dense isometric copy of $B$. Finally step 3.1 gives $\|[x_n]^*[x_n]\|=\lim_n\|x_n^*x_n\|=\lim_n\|x_n\|^2=\|[x_n]\|^2$. This is a C\*-algebra by F4. [F4, step 1.2, step 2.1, step 3.1]

5.1 The Axiom of Choice is inherited from the integrated-form and completion suppliers of F1–F4, as declared in the definition of the universal seminorm ([[def-axiom-of-choice]]). [given, F1] ∎

