---
id: thm-stone-duality
kind: theorem
title: Stone duality
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-stone-representation-for-boolean-algebras, def-stone-space-and-clopen-algebra, def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Marcus Tressl, Stone Duality for Boolean Algebras — Theorem 3.1.6, p. 12; Lemma 4.1, Definitions 4.2–4.3, p. 16; Theorem 4.4, pp. 16–17"
      url: "https://personalpages.manchester.ac.uk/staff/marcus.tressl/papers/StoneDualityBooleanAlgebras.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathsf{BA}$ be the
category of Boolean algebras
([[def-boolean-algebra-and-boolean-ultrafilter-for-stone-duality]]) with Boolean
homomorphisms, and let $\mathsf{Stone}$ be the category of Stone spaces
([[def-stone-space-and-clopen-algebra]]) with continuous maps. Then

$$B \longmapsto \operatorname{Ult}(B), \qquad X \longmapsto \operatorname{Clop}(X),$$

together with $f \mapsto f^*$, $f^*(C) := f^{-1}(C)$, on continuous maps and
$\varphi \mapsto \varphi^*$, $\varphi^*(U) := \varphi^{-1}(U)$, on Boolean
homomorphisms, define a **contravariant equivalence of categories**: the
evaluation maps

$$\eta_B : B \to \operatorname{Clop}(\operatorname{Ult}(B)),\quad \eta_B(b) = [b], \qquad \varepsilon_X : X \to \operatorname{Ult}(\operatorname{Clop}(X)),\quad \varepsilon_X(x) = \{C : x \in C\}$$

are natural isomorphisms, and the two arrow assignments are mutually inverse
under them. No prime-spectrum machinery is used.

## Facts & Assumptions

**Given:** The Axiom of Choice, the categories $\mathsf{BA}$ and $\mathsf{Stone}$ as described, and the assignments above.

[L1] For every Boolean algebra $B$ the map $\eta_B : b \mapsto [b]$ is an isomorphism of Boolean algebras onto $\operatorname{Clop}(\operatorname{Ult}(B))$, and $\operatorname{Ult}(B)$ is a Stone space ([[thm-stone-representation-for-boolean-algebras]], [[def-axiom-of-choice]]).

[L2] For a Stone space $X$, $\operatorname{Clop}(X)$ is a Boolean algebra and $\operatorname{Ult}(\operatorname{Clop}(X))$ is the ultrafilter space of clopens with basic opens $[C] = \{U : C \in U\}$ ([[def-stone-space-and-clopen-algebra]]).

[L3] The preimage of an ultrafilter under a Boolean homomorphism is an ultrafilter: if $U$ is an ultrafilter in $B$ and $\varphi : A \to B$ is a Boolean homomorphism, then $\varphi^{-1}(U)$ contains $1_A$, omits $0_A$, is closed under $\wedge$ and upward closed (all by the homomorphism identities), and decides every element because $\varphi(a) \in U$ or $\neg\varphi(a) = \varphi(\neg a) \in U$. [algebra]

[L4] A continuous map $f : X \to Y$ between Stone spaces has $f^{-1}(C)$ clopen for every clopen $C$, and preimages preserve the Boolean operations; distinct points of a Stone space are separated by a clopen set, since the space is Hausdorff and has a clopen basis. [algebra]

## Proof

**Proof technique:** direct.

1.1 A Boolean homomorphism $\varphi : A \to B$ induces $\varphi^* : \operatorname{Ult}(B) \to \operatorname{Ult}(A)$, $\varphi^*(U) := \varphi^{-1}(U)$, which is well defined by [L3] and continuous because $(\varphi^*)^{-1}([a]) = [\varphi(a)]$ for $a \in A$; moreover $(\mathrm{id}_A)^* = \mathrm{id}$ and $(\psi \circ \varphi)^* = \varphi^* \circ \psi^*$ for composable homomorphisms $\varphi : A \to B$, $\psi : B \to C$. [L3, algebra]

1.2 A continuous map $f : X \to Y$ between Stone spaces induces $f^* : \operatorname{Clop}(Y) \to \operatorname{Clop}(X)$, $f^*(C) := f^{-1}(C)$, which is a Boolean homomorphism by [L4]; identity and composition are preserved in the reversed order, since $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$. [L4, algebra]

1.3 For a Stone space $X$ the map $\varepsilon_X : X \to \operatorname{Ult}(\operatorname{Clop}(X))$ is a bijection: $\varepsilon_X(x)$ is a proper filter of clopens (it contains $X$, omits $\varnothing$, is closed under intersections and upward closed) which decides every clopen $C$ because exactly one of $x \in C$, $x \in X \setminus C$ holds, so it is an ultrafilter by the dichotomy; it is injective because distinct points are separated by a clopen set by [L4]; and it is surjective, since for an ultrafilter $U$ of clopens the family $U$ has the finite intersection property, so $\bigcap_{C \in U} C \ne \emptyset$ by compactness, and if $x \ne y$ both lie in the intersection then a clopen $C$ containing exactly one of them belongs to $U$ by the dichotomy and excludes the other, a contradiction, so the intersection is a single point $x$ and then $C \in U$ for every clopen $C$ containing $x$ (because $\{C' \setminus C : C' \in U\}$ has finite subfamily with empty intersection, giving $C' \subseteq C$ for some $C' \in U$). [L2, L4, algebra]

2.1 For every Stone space $X$ the map $\varepsilon_X$ is continuous, since $\varepsilon_X^{-1}([C]) = C$ is open, and it is a homeomorphism because it is a continuous bijection from the compact space $X$ to the Hausdorff space $\operatorname{Ult}(\operatorname{Clop}(X))$. [step 1.3, L1, L2]

2.2 Naturality: for a Boolean homomorphism $\varphi : A \to B$ and $a \in A$ one has $\eta_B(\varphi(a)) = [\varphi(a)] = (\varphi^*)^{-1}([a]) = \varphi^{**}(\eta_A(a))$, that is, $\eta_B \circ \varphi = \varphi^{**} \circ \eta_A$; for a continuous $f : X \to Y$ and $x \in X$ one has $\varepsilon_Y(f(x)) = \{C : f(x) \in C\} = \{C : x \in f^{-1}(C)\} = f^{**}(\varepsilon_X(x))$, that is, $\varepsilon_Y \circ f = f^{**} \circ \varepsilon_X$. [step 1.1, step 1.2, step 1.3, algebra]

3.1 The two functors are mutually inverse on hom-sets: given $\varphi : A \to B$ the naturality of [step 2.2] and invertibility of $\eta_A, \eta_B$ (from [L1]) give $\varphi = \eta_B^{-1} \circ \varphi^{**} \circ \eta_A$, so $\varphi$ is determined by $\varphi^*$, and symmetrically for continuous maps using [step 2.1]; since [step 1.1] and [step 1.2] show that the assignments preserve identities and composition, they define a contravariant equivalence of categories. [step 1.1, step 1.2, step 2.1, step 2.2, L1]

4.1 The statement is proved: $\eta$ is a natural isomorphism by [L1] and [step 2.2], $\varepsilon$ is a natural isomorphism by [step 2.1] and [step 2.2], and the arrow assignments are mutually inverse by [step 3.1]. [step 2.1, step 2.2, step 3.1, L1] ∎

## Remarks

- **Both directions of the arrow correspondence are used.** Surjectivity of $\varepsilon_X$ uses compactness; injectivity uses the clopen basis in the Hausdorff form; and naturality is a pure membership computation.
- **No choice beyond AC appears.** Ultrafilters are produced by the extension lemma only, which is the declared AC/Zorn implementation.
