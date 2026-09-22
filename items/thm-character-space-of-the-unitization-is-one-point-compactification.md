---
id: thm-character-space-of-the-unitization-is-one-point-compactification
kind: theorem
title: Character space of the unitization is one-point compactification
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-minimal-c-star-unitization", "def-algebraic-unitization-of-a-star-algebra", "thm-maximal-ideal-space-is-compact-hausdorff", "thm-characters-on-a-unital-banach-algebra-are-continuous", "def-character-and-maximal-ideal-space", "thm-one-point-compactification-properties", "def-one-point-compactification", "thm-locally-compact-hausdorff-basics", "thm-commutative-gelfand-naimark", "thm-compactness-under-continuous-maps", "def-axiom-of-choice", "thm-closed-subspace-of-a-compact-space-is-compact", "thm-compact-subset-of-a-hausdorff-space-is-closed"]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Exercise 3.1.15 and Lemma 3.1.20, printed pp. 60–62"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative
C\*-algebra that is genuinely nonunital and nonzero, let $A^+$ be its minimal
unitization ([[thm-minimal-c-star-unitization]],
[[def-algebraic-unitization-of-a-star-algebra]]), and let $\chi_\infty$ be the
quotient character $\chi_\infty(a,\lambda) = \lambda$. Then

$$\Delta(A^+) \;=\; \{\,\tilde\varphi : \varphi \in \Delta(A)\,\} \;\cup\; \{\chi_\infty\}, \qquad \tilde\varphi(a,\lambda) = \varphi(a) + \lambda,$$

and the map $\varphi \mapsto \tilde\varphi$ is a homeomorphism of $\Delta(A)$
onto $\Delta(A^+) \setminus \{\chi_\infty\}$; moreover
$\Delta(A^+)$ with its weak-star topology is the **one-point compactification**
of $\Delta(A)$ ([[def-one-point-compactification]]). For the zero algebra
$A = \{0\}$ one has $A^+ = \mathbb C$ and $\Delta(A^+) = \{\mathrm{id}\}$ while
$\Delta(A) = \varnothing$, so $\Delta(A^+) = \varnothing^+$; the empty case is
consistent with the same formula.

## Facts & Assumptions

**Given:** AC, nonzero genuinely nonunital commutative $A$, its minimal unitization and quotient character as in the statement.

[A1] AC is assumed for the unitization, compact character-space and Gelfand–Naimark suppliers. ([[def-axiom-of-choice]]).

[F1] The algebraic unitization has product $(a,\lambda)(b,\mu)=(ab+\lambda b+\mu a,\lambda\mu)$ and quotient character $\chi_\infty(a,\lambda)=\lambda$. Under AC the minimal norm makes it a nonzero unital C*-algebra extending the norm of $A$, with $A\oplus0$ a closed ideal. For zero $A$ the unitization is $\mathbb C$. ([[def-algebraic-unitization-of-a-star-algebra]], [[thm-minimal-c-star-unitization]]).

[F2] A character is a nonzero multiplicative complex-linear functional, with pointwise-evaluation topology on the character space. On a nonzero unital Banach algebra characters are unital and contractive. Under AC its commutative character space is compact Hausdorff, with pointwise topology equal to the weak-star subspace topology. ([[def-character-and-maximal-ideal-space]], [[thm-characters-on-a-unital-banach-algebra-are-continuous]], [[thm-maximal-ideal-space-is-compact-hausdorff]]).

[F3] Under AC the Gelfand transform of a nonzero unital commutative C*-algebra is an isometric unital star-isomorphism onto its continuous functions, given by evaluation at characters. ([[thm-commutative-gelfand-naimark]]).

[F4] An open subset of a locally compact Hausdorff space is locally compact Hausdorff. In the one-point topology, neighborhoods of infinity are complements of closed compact subsets of the original space; an LCH space has compact Hausdorff one-point compactification, and is dense there exactly when noncompact. ([[thm-locally-compact-hausdorff-basics]], [[def-one-point-compactification]], [[thm-one-point-compactification-properties]]).

[F5] Closed subsets of compact spaces are compact, continuous images of compact sets are compact, and compact subsets of Hausdorff spaces are closed. ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 The algebraic correspondence. Put $K=\Delta(A^+)$ and $q=\chi_\infty$. For a character $\varphi$ on $A$, define $E\varphi(a,\lambda)=\varphi(a)+\lambda$. By [F1], $E\varphi((a,\lambda)(b,\mu))=\varphi(a)\varphi(b)+\lambda\varphi(b)+\mu\varphi(a)+\lambda\mu=E\varphi(a,\lambda)E\varphi(b,\mu)$. It is linear, unital, and nonzero. Conversely any $\chi\in K$ has $\chi(a,\lambda)=\chi(a,0)+\lambda$ by [F2]; its restriction to $A$ is either zero, giving $\chi=q$, or a character $\varphi$, giving $\chi=E\varphi$. Restriction is inverse to $E$ on $K\setminus\{q\}$, and $E\varphi\ne q$ because $\varphi$ is nonzero. Contractivity of $E\varphi$ and the norm extension give $|\varphi(a)|\le\|a\|$, so the nonunital characters are bounded too. [A1, F1, F2, algebra]

2.1 Identify the topology on the complement first. For fixed $(a,\lambda)$, evaluation of $E\varphi$ is the continuous function $\varphi\mapsto\varphi(a)+\lambda$. By the evaluation-topology definition [F2], $E:\Delta(A)\to K$ is continuous. Its inverse on its image is restriction, whose evaluation at $a$ is the continuous function $\chi\mapsto\chi(a,0)$. Hence $E$ is a homeomorphism onto $K\setminus\{q\}$ with its subspace topology. Since $K$ is compact Hausdorff by [F2], it is locally compact (the whole space is a compact neighborhood of every point); its complement of the closed singleton $q$ is open and LCH by [F4]. Thus $\Delta(A)$ is LCH without using any assumed compactification topology. [F2, F4, step 1.1]

2.2 The point $q$ is not isolated. Under the isomorphism $\Gamma:A^+\to C(K)$ of [F3], $\Gamma(a,\lambda)(q)=\lambda$. Therefore $\Gamma(A\oplus0)$ is exactly the ideal $J=\{f\in C(K):f(q)=0\}$: one inclusion follows by evaluation, and for the reverse use surjectivity and the same equality. If $q$ were isolated, the function equal to zero at $q$ and one on its complement would be continuous and an identity for $J$. This ideal is nonzero because $A$ is nonzero, so its identity would be nonzero; its preimage would be a two-sided identity for $A$, contradicting genuine nonunitality. Hence $q$ is not isolated and $K\setminus\{q\}$ is dense. It is noncompact: otherwise its continuous image in Hausdorff $K$ would be closed by [F5], making $q$ isolated. [A1, F1, F2, F3, F5, step 1.1, algebra]

3.1 Compare all neighborhoods at infinity. Extend $E$ to a bijection $\Psi:\Delta(A)^+\to K$ by sending the added point to $q$. The two topologies already agree off infinity by step 2.1. If $U$ is open in $K$ and contains $q$, its complement $D=K\setminus U$ is compact by [F5] and contained in $K\setminus\{q\}$. The inverse homeomorphism in step 2.1 carries $D$ to a compact subset of $\Delta(A)$, which is closed because that space is Hausdorff. Thus $\Psi^{-1}U$ is open at infinity by [F4]. Conversely, if $C$ is closed compact in $\Delta(A)$, then $E(C)$ is compact in Hausdorff $K$ and hence closed by [F5]; its complement is an open neighborhood of $q$ corresponding to $\Delta(A)^+\setminus C$. This proves equality of the topologies and that $\Psi$ is a homeomorphism. This argument also covers open sets containing both a character and infinity; no preimage is incorrectly confined to $\Delta(A)$. [F4, F5, step 2.1, step 2.2]

4.1 The zero case and conclusion. If $A=0$, [F1] gives $A^+=\mathbb C$. A nonzero complex-linear multiplicative functional on $\mathbb C$ is the identity: it has value one at 1 by [F2], so at $\lambda$ it has value $\lambda$. There are no nonzero linear functionals from the zero algebra. Hence $\Delta(A)=\varnothing$ and $K$ is the singleton, exactly $\varnothing^+$. Its original subspace is not dense; density was asserted only in the nonzero genuinely nonunital case of step 2.2. In that case step 1.1 proves the displayed disjoint character decomposition, step 2.1 the complement homeomorphism and step 3.1 the one-point compactification with its weak-star topology. [F1, F2, F4, step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎
