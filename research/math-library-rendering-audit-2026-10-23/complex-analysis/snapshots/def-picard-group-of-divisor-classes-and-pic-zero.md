---
id: def-picard-group-of-divisor-classes-and-pic-zero
kind: definition
title: The Picard group of divisor classes and its degree-zero part
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2 §21.6, printed pp. 170–171: Pic(X)=Div(X)/Div_p(X) and Pic^0(X)=Div^0(X)/Div_p(X); Ch. 3 §29.18, printed pp. 226–227: the divisor-line-bundle correspondence"
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 14, Theorem 14.1 and Corollary 14.4, printed pp. 119–120: O(D) and every line bundle being O(D); Ch. 15, ‘The Picard group,’ printed pp. 128–129: the divisor quotient and matching degree"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the full Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact connected Riemann surface and let $\operatorname{Div}(X)$ be its group of divisors ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]). Let $\operatorname{Prin}(X):=\{(f): f\in\mathcal M(X)^*\}$ be the subgroup of principal divisors. Divisors are linearly equivalent when $D\sim D'$ iff $D-D'\in\operatorname{Prin}(X)$. The quotient
$$\operatorname{Pic}(X):=\operatorname{Div}(X)/\operatorname{Prin}(X)$$
is the **Picard group** of divisor classes. Since principal divisors have degree zero, degree descends to a homomorphism $\deg:\operatorname{Pic}(X)\to\mathbb Z$, and
$$\operatorname{Pic}^0(X):=\ker(\deg)=\operatorname{Div}^0(X)/\operatorname{Prin}(X),\qquad \operatorname{Div}^0(X):=\ker(\deg:\operatorname{Div}(X)\to\mathbb Z),$$
is the subgroup of degree-zero divisor classes. The map $[D]\mapsto[\mathcal O(D)]$ is a canonical group isomorphism from $\operatorname{Pic}(X)$ to the isomorphism classes of holomorphic line bundles on $X$ under tensor product ([[def-line-bundle-associated-to-a-divisor]], [[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface]]). In particular, $\mathcal O(D)\cong\mathcal O(D')$ iff $D\sim D'$, and $\operatorname{Pic}^0(X)$ corresponds exactly to degree-zero line bundles, with $\deg(\mathcal O(D)):=\deg D$. Full AC is used through the meromorphic-section existence lemma for surjectivity; the construction of $\mathcal O(D)$ on compact $X$ uses a finite cover.

## Facts & Assumptions

**Given:** Full AC and a compact connected Riemann surface $X$.

[F1] For nonzero meromorphic functions, $(fg)=(f)+(g)$ and $(1/f)=-(f)$, so principal divisors form a subgroup of $\operatorname{Div}(X)$ ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F2] On compact $X$, every principal divisor has degree zero, and divisor degree is additive ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] The divisor-bundle construction satisfies $\mathcal O(D+D')\cong\mathcal O(D)\otimes\mathcal O(D')$ and $\mathcal O(0)\cong X\times\mathbb C$ ([[def-line-bundle-associated-to-a-divisor]]).

[F4] If $D\sim D'$, then $\mathcal O(D)\cong\mathcal O(D')$; the supplier constructs this isomorphism from a meromorphic function whose divisor is $D'-D$ ([[def-line-bundle-associated-to-a-divisor]]).

[F5] The bundle $\mathcal O(D)$ has a canonical meromorphic section $s_D$ with divisor $(s_D)=D$, obtained locally from equations $f_i$ of $D$ and frames $e_i$ by $s_D|_{U_i}=f_i e_i$ ([[def-line-bundle-associated-to-a-divisor]]).

[F6] A meromorphic section is a family of meromorphic local coefficients satisfying the same frame transition law ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F7] Every holomorphic line bundle on compact connected $X$ has a nonzero meromorphic section; for each prescribed $p\in X$ one can choose it holomorphic off $p$ with a pole at $p$ ([[lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface]]).

[F8] Full AC is assumed and supplies the hypothesis used by [F7]; no choice is used in forming the divisor quotient or its degree kernel ([[def-axiom-of-choice]]).

[F9] A nonzero meromorphic function has a local factorization $f=z^m u$ with $u$ holomorphic and nonzero; order zero therefore means a holomorphic unit ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F10] The divisor of a nonzero meromorphic section is locally finite and has finite support on compact $X$ ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

## Proof

**Proof technique:** divisor quotient and local line-bundle isomorphisms.

1.1 Let $\operatorname{Prin}(X)=\{(f):f\in\mathcal M(X)^*\}$. By [F1] it is a subgroup of the abelian group $\operatorname{Div}(X)$. Thus $D\sim D'$ exactly when $D-D'\in\operatorname{Prin}(X)$ is an equivalence relation, and its classes form the quotient abelian group $\operatorname{Pic}(X)=\operatorname{Div}(X)/\operatorname{Prin}(X)$. [F1, given, algebra]

2.1 Divisor degree is additive and vanishes on $\operatorname{Prin}(X)$ by [F2], so it induces a homomorphism $\deg:\operatorname{Pic}(X)\to\mathbb Z$. A class $[D]$ lies in its kernel exactly when $\deg D=0$, hence $\ker(\deg)=\operatorname{Div}^0(X)/\operatorname{Prin}(X)$, which is the stated $\operatorname{Pic}^0(X)$. [F2, step 1.1, algebra]

2.2 Define $\Theta:\operatorname{Pic}(X)\to\operatorname{Pic}_{\mathrm{bun}}(X)$ by $\Theta([D])=[\mathcal O(D)]$, where $\operatorname{Pic}_{\mathrm{bun}}(X)$ is the group of isomorphism classes of holomorphic line bundles under tensor product. This is well defined by [F4], and [F3] makes it a group homomorphism. [F3, F4, step 1.1, algebra]

3.1 Suppose $\mathcal O(D)\cong\mathcal O(D')$, and let $\Phi$ be a holomorphic bundle isomorphism between them. By [F5], $\Phi(s_D)$ and $s_{D'}$ are nonzero meromorphic sections; a bundle isomorphism is locally multiplication by a nowhere-zero holomorphic function, so $\Phi(s_D)$ has divisor $D$. By [F6], their ratio $f:=\Phi(s_D)/s_{D'}$ is a global nonzero meromorphic function, with $(f)=D-D'$. Thus $D\sim D'$ and $\Theta$ is injective. [F5, F6, step 2.2, given, algebra]

4.1 Let $E\to X$ be any holomorphic line bundle. By [F7] choose a nonzero meromorphic section $s$ and put $D=(s)$, a finite divisor by [F10]. On a common finite refinement of the local frames for $E$ and the equations defining $\mathcal O(D)$, write $s=h_i v_i$ and $s_D=f_i e_i$. Since $(h_i)=(f_i)=D|_{U_i}$, [F9] makes $a_i:=f_i/h_i$ holomorphic and nowhere zero. Define $\Phi(v_i)=a_i e_i$; the transition laws $g^E_{ij}=h_i/h_j$ and $g^{\mathcal O}_{ij}=f_i/f_j$ give $a_jg^{\mathcal O}_{ij}=g^E_{ij}a_i$, so these local maps glue to a holomorphic line-bundle isomorphism $E\to\mathcal O(D)$ carrying $s$ to $s_D$. Hence $\Theta$ is surjective. Together with step 3.1 this proves the claimed group isomorphism; degree is well defined on line-bundle classes by injectivity, and $\operatorname{Pic}^0(X)$ corresponds exactly to degree-zero line bundles. Full AC is used here only through [F7]; the compact divisor-bundle construction uses a finite cover. [F5, F6, F7, F8, F9, F10, step 2.2, step 3.1, construct] ∎
