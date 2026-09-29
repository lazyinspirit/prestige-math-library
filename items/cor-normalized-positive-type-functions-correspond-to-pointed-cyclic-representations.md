---
id: cor-normalized-positive-type-functions-correspond-to-pointed-cyclic-representations
kind: corollary
title: Normalized positive type and pointed cyclic unitary representations
status: published
origin: pipeline
pipeline_run: frontier-36-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-inner-product-induces-a-norm
  - def-axiom-of-choice
  - def-continuous-function-of-positive-type
  - def-cyclic-vector-and-cyclic-unitary-representation
  - def-matrix-coefficient-of-a-unitary-representation
  - def-real-and-complex-inner-product-space
  - def-strongly-continuous-unitary-representation
  - def-topological-group
  - lem-diagonal-unitary-coefficients-have-positive-type
  - thm-gns-construction-for-topological-groups
  - thm-uniqueness-of-the-cyclic-gns-representation
axiom_audit: "Assume AC through the GNS construction and pointed uniqueness theorems to realize each normalized coefficient and identify triples with the same coefficient. The coefficient-to-positive-type calculation and its invariance under an explicitly given pointed unitary intertwiner are choice-free."
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Bekka and de la Harpe, Unitary Representations of Groups, Duals, and Characters, Proposition 1.B.8 and its injectivity proof"
      url: https://arxiv.org/pdf/1912.07262
      locator: "Chapter 1 §1.B, printed p. 29"
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Theorem C.4.10 and complete proof"
      url: https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf
      locator: "Appendix C §C.4, printed pp. 376–377"
---

## Statement

Assume the Axiom of Choice, and let $G$ be a topological group. Consider triples
$(\pi,H,\xi)$ in which $H$ is a complex Hilbert space, $\pi:G\to U(H)$ is a
strongly continuous unitary representation, and $\xi$ is a cyclic vector with
$\|\xi\|=1$. Declare two such triples equivalent when there is a unitary
intertwiner $U:H\to H'$ with $U\xi=\xi'$. The map
$$
[(\pi,H,\xi)]\longmapsto\bigl(g\longmapsto\langle\pi(g)\xi,\xi\rangle\bigr)
$$
is a bijection from these equivalence classes to $P_1(G)$. Its inverse sends
$\varphi\in P_1(G)$ to the equivalence class of its GNS triple. The zero
function is excluded from $P_1(G)$.

## Facts & Assumptions

**Given:** AC; a topological group $G$; strongly continuous unitary representations on complex Hilbert spaces; cyclic distinguished vectors; and the first-variable-linear inner-product convention.

[F1] $P(G)$ is the set of continuous functions of positive type, and $P_1(G)=\{\varphi\in P(G):\varphi(e)=1\}$ ([[def-continuous-function-of-positive-type]]).

[F2] The matrix coefficient associated to $(\xi,\eta)$ is $c_{\xi,\eta}(g)=\langle\pi(g)\xi,\eta\rangle$; it is continuous for a topological group and a strongly continuous representation ([[def-matrix-coefficient-of-a-unitary-representation]]).

[F3] A strongly continuous unitary representation is a homomorphism into bijective complex-linear isometries; a unitary intertwiner is complex-linear and norm-preserving ([[def-strongly-continuous-unitary-representation]]).

[F4] A vector is cyclic exactly when its complex-linear representation-orbit span is dense ([[def-cyclic-vector-and-cyclic-unitary-representation]]).

[F5] The diagonal coefficient of a strongly continuous unitary representation is continuous and of positive type, and its value at $e$ is $\|\xi\|^2$ ([[lem-diagonal-unitary-coefficients-have-positive-type]]).

[F6] Under AC, every continuous positive-type function has a strongly continuous cyclic GNS triple with coefficient $\varphi$ and $\|\xi_\varphi\|^2=\varphi(e)$ ([[thm-gns-construction-for-topological-groups]]).

[F7] Under AC, two cyclic strongly continuous unitary triples with the same diagonal coefficient have a unique unitary intertwiner carrying one distinguished vector to the other ([[thm-uniqueness-of-the-cyclic-gns-representation]]).

[F8] The complex inner product is linear in its first variable and its induced norm is $\|v\|=\sqrt{\langle v,v\rangle}$ ([[def-real-and-complex-inner-product-space]]).

[F9] The induced Hilbert norm is nonnegative and vanishes only at the zero vector ([[cor-inner-product-induces-a-norm]]).

[F10] A topological group is a group with a topology for which multiplication and inversion are continuous ([[def-topological-group]]).

[F11] AC is the axiom that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

Bekka–de la Harpe and Bekka–de la Harpe–Valette give the normalized correspondence in Proposition 1.B.8 and the GNS existence-and-uniqueness theorem in Theorem C.4.10, respectively. The displayed proof of Proposition 1.B.8 checks injectivity by comparing orbit-sum Gram norms and says the other verifications are left to the reader. Its formal statement is specifically about $P_1(G)$ and unit cyclic vectors. The argument below supplies the well-definedness and surjectivity checks as well as injectivity.

**Proof technique:** direct.

1.1 Let $(\pi,H,\xi)$ be a strongly continuous unitary triple with $\xi$ cyclic and $\|\xi\|=1$, and set $\varphi(g)=\langle\pi(g)\xi,\xi\rangle$. By [F2] and [F5], $\varphi$ is continuous and of positive type. Also [F5] gives $\varphi(e)=\|\xi\|^2=1$, so $\varphi\in P_1(G)$ by [F1]. [F1, F2, F5, F10]

1.2 Identity maps, inverses, and compositions of pointed unitary intertwiners show that the stated relation is an equivalence relation. If $U:H\to H'$ is a unitary intertwiner with $U\xi=\xi'$, then the squared-norm identities $$\|u+v\|^2-\|u-v\|^2=4\operatorname{Re}\langle u,v\rangle,\qquad \|u+iv\|^2-\|u-iv\|^2=4\operatorname{Im}\langle u,v\rangle$$ and [F3, F8] show that $U$ preserves the inner product. Thus, for every $g\in G$, $$\langle\pi'(g)\xi',\xi'\rangle=\langle U\pi(g)\xi,U\xi\rangle=\langle\pi(g)\xi,\xi\rangle.$$ So the map in the statement is well-defined. [F2, F3, F8, algebra]

1.3 Let $\varphi\in P_1(G)$. Then $\varphi$ is continuous and of positive type, and $\varphi(e)=1$ by [F1]. By AC and [F6], its GNS triple $(\pi_\varphi,H_\varphi,\xi_\varphi)$ is strongly continuous and cyclic, has coefficient $\varphi$, and satisfies $\|\xi_\varphi\|^2=\varphi(e)=1$. Nonnegativity of the Hilbert norm [F9] gives $\|\xi_\varphi\|=1$, so this triple is in the stated domain [F4]. Hence every member of $P_1(G)$ is attained. [F1, F4, F6, F9, F11]

1.4 If two domain triples have the same image $\varphi$, then they have the same diagonal coefficient at every $g\in G$. They are cyclic, so [F7] supplies a unique unitary intertwiner taking the first distinguished vector to the second. Thus the triples are equivalent and the coefficient map is injective on equivalence classes. [F4, F7]

2.1 Step 1.2 proves the forward assignment is well-defined, step 1.1 places its values in $P_1(G)$, step 1.3 constructs a GNS class for every member of $P_1(G)$, and step 1.4 proves that class is unique. Therefore the coefficient map and the GNS assignment are inverse bijections. The zero function has value $0$ at $e$, so it is not in $P_1(G)$; its zero GNS vector is not a unit vector. [F1, F6, step 1.1, step 1.2, step 1.3, step 1.4]

3.1 AC is used through the GNS construction [F6] to realize each $\varphi\in P_1(G)$ and through pointed uniqueness [F7] to identify any two cyclic triples with the same coefficient. The coefficient calculation and the invariance under a given unitary intertwiner use no choice. [F6, F7, F11, step 1.2, step 1.3, step 1.4] ∎
