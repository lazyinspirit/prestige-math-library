---
id: ex-dual-crystal-reverses-arrows-and-weights
kind: example
title: "Dual crystals reverse arrows and weights: two small computations"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-dual-crystal-and-reversal-conventions, def-tensor-product-of-crystals, lem-crystal-tensor-product-weight-epsilon-and-phi-formulas, def-crystal-graph-epsilon-phi-and-weight, def-kashiwara-lattices-lambda-and-infinity, ex-tensor-crystal-b-one-tensor-b-one-for-sl-two, ex-highest-components-in-a-small-type-a-two-tensor-crystal, thm-quantized-sl-two-string-formulas]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Shimozono, Crystals for Dummies (lecture notes, 28 August 2005)"
      url: "https://www.aimath.org/WWN/kostka/crysdumb.pdf"
      locator: "§2.3.5, formulas (2.17) and Example 2.27: the dual of the single box crystal $B(1)^\\vee$ with reversed arrows and negated weights, and the remark that the construction comes from the contragredient dual of a module; Lemma 2.28 for the tensor swap."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed p. 333, Example 13.3.0.21: the crystal of the standard representation of $\\mathfrak{sl}(3)$ and of $V^*$, used for the comparison in (B)."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§5, printed pp. 19-22, Example 5.1(a) and Theorem 5.2: the rank-one crystals and the tensor rule used in (C)."
---

## Example

The example computes the dual crystal of [[prop-dual-crystal-and-reversal-conventions]] in two small cases.

(A) For $\mathfrak g=\mathfrak{sl}_2$, let $B(1)=\{v_0\xrightarrow{1}v_1\}$ with $wt(v_0)=\lambda_1,\ wt(v_1)=-\lambda_1$ and $\varepsilon_1(v_0)=0,\varphi_1(v_0)=1,\varepsilon_1(v_1)=1,\varphi_1(v_1)=0$ (as in [[ex-tensor-crystal-b-one-tensor-b-one-for-sl-two]]). Then $B(1)^\vee=\{v_0^\vee,v_1^\vee\}$ has the single arrow $v_1^\vee\xrightarrow{1}v_0^\vee$, weights $wt(v_0^\vee)=-\lambda_1,\ wt(v_1^\vee)=\lambda_1$, and $(\varepsilon_1,\varphi_1)$ equal to $(1,0)$ at $v_0^\vee$ and $(0,1)$ at $v_1^\vee$. Hence $B(1)^\vee\cong B(1)$ as crystals, realized with the highest vertex $v_1^\vee$.

(B) For $\mathfrak g=\mathfrak{sl}_3$, let $B(\lambda_1)=\{u_1\xrightarrow{1}u_2\xrightarrow{2}u_3\}$ be the standard crystal of [[ex-highest-components-in-a-small-type-a-two-tensor-crystal]]. Then $B(\lambda_1)^\vee=\{u_1^\vee,u_2^\vee,u_3^\vee\}$ has the arrows $u_2^\vee\xrightarrow{1}u_1^\vee$ and $u_3^\vee\xrightarrow{2}u_2^\vee$, weights $-\lambda_1,\ -\lambda_2+\lambda_1,\ \lambda_2$ at $u_1^\vee,u_2^\vee,u_3^\vee$, and $\varepsilon/\varphi$ exchanged; this is the crystal $B(\lambda_2)$ of the dual three-dimensional module, so $B(\lambda_1)^\vee\cong B(\lambda_2)$.

(C) On the tensor square of (A), $(B(1)\otimes B(1))^\vee\cong B(1)^\vee\otimes B(1)^\vee$ under $(b_1\otimes b_2)^\vee\mapsto b_2^\vee\otimes b_1^\vee$; both sides split as $B(2)\sqcup B(0)$ because each of $B(2),B(0)$ is self-dual along the chain reversal (weights $2\lambda_1,0,-2\lambda_1$ are symmetric).

## Facts & Assumptions

**Given:** The dual-crystal construction of [[prop-dual-crystal-and-reversal-conventions]] applied to the two-element crystal $B(1)=\{v_0\xrightarrow{1}v_1\}$ of $\mathfrak{sl}_2$ and the three-element standard crystal $B(\lambda_1)=\{u_1\xrightarrow{1}u_2\xrightarrow{2}u_3\}$ of $\mathfrak{sl}_3$, and the tensor square $B(1)\otimes B(1)$ of [[ex-tensor-crystal-b-one-tensor-b-one-for-sl-two]].

[F1] The dual crystal ([[prop-dual-crystal-and-reversal-conventions]]): $wt(b^\vee)=-wt(b)$, $\varepsilon_i(b^\vee)=\varphi_i(b)$, $\varphi_i(b^\vee)=\varepsilon_i(b)$, $\tilde f_i(b^\vee)=(\tilde e_ib)^\vee$, $\tilde e_i(b^\vee)=(\tilde f_ib)^\vee$, with reversed arrows and the tensor swap $(B_1\otimes B_2)^\vee\cong B_2^\vee\otimes B_1^\vee$.

[F2] The rank-one crystal ([[thm-quantized-sl-two-string-formulas]], as used in [[ex-tensor-crystal-b-one-tensor-b-one-for-sl-two]]): $B(1)=\{v_0,v_1\}$ with the single arrow $v_0\xrightarrow{1}v_1$, weights $\lambda_1,-\lambda_1$ and $(\varepsilon_1,\varphi_1)$ equal to $(0,1)$ at $v_0$ and $(1,0)$ at $v_1$.

[F3] The standard $\mathfrak{sl}_3$ crystal ([[ex-highest-components-in-a-small-type-a-two-tensor-crystal]]): $B(\lambda_1)=\{u_1,u_2,u_3\}$ with arrows $u_1\xrightarrow{1}u_2\xrightarrow{2}u_3$, weights $\lambda_1,\lambda_2-\lambda_1,-\lambda_2$, and $\varepsilon_1=(0,1,0)$, $\varepsilon_2=(0,0,1)$; the weights satisfy $\lambda_2-\lambda_1=-(\lambda_1-\lambda_2)$.

[F4] Crystal graph conventions ([[def-crystal-graph-epsilon-phi-and-weight]]) and the tensor product crystal ([[def-tensor-product-of-crystals]]) with its $\varepsilon/\varphi$ formulas ([[lem-crystal-tensor-product-weight-epsilon-and-phi-formulas]]).

[F5] The self-duality of the one-colour chains ([[def-kashiwara-lattices-lambda-and-infinity]]): $B(2)$ is the three-element chain of weights $2\lambda_1,0,-2\lambda_1$ and $B(0)$ the one-element crystal of weight $0$, both fixed by the dual construction along chain reversal.

## Verification

**Proof technique:** direct.

1.1 (A) Apply $\tilde f_1(b^\vee)=(\tilde e_1b)^\vee$ and $\tilde e_1(b^\vee)=(\tilde f_1b)^\vee$ of [F1] to $b=v_0,v_1$: $\tilde e_1v_0=0$ gives $\tilde f_1(v_0^\vee)=0$; $\tilde e_1v_1=v_0$ gives $\tilde f_1(v_1^\vee)=v_0^\vee$; $\tilde f_1v_0=v_1$ gives $\tilde e_1(v_0^\vee)=v_1^\vee$; $\tilde f_1v_1=0$ gives $\tilde e_1(v_1^\vee)=0$. So the only arrow is $v_1^\vee\xrightarrow{1}v_0^\vee$ and the values $(\varepsilon_1,\varphi_1)=(\varphi_1,\varepsilon_1)$ are $(1,0)$ at $v_0^\vee$ and $(0,1)$ at $v_1^\vee$; weights are negated by [F1]. Comparing with [F2], the map $v_1^\vee\mapsto v_0$, $v_0^\vee\mapsto v_1$ preserves arrows, weights and $\varepsilon/\varphi$, so $B(1)^\vee\cong B(1)$ with highest vertex $v_1^\vee$. [given, F1, F2]

2.1 (B) The same rules apply to the two arrows $u_1\xrightarrow{1}u_2$ and $u_2\xrightarrow{2}u_3$: only the arrows reverse, and by [F3] the values of $(\varepsilon_1,\varphi_1)$ are $(0,1),(1,0),(0,0)$ at $u_1,u_2,u_3$ while $(\varepsilon_2,\varphi_2)$ are $(0,0),(0,1),(1,0)$; after dualizing, $(\varepsilon_1,\varphi_1)$ at $(u_1^\vee,u_2^\vee,u_3^\vee)$ are $(1,0),(0,1),(0,0)$ and $(\varepsilon_2,\varphi_2)$ are $(0,0),(1,0),(0,1)$. Compare with the standard crystal $B(\lambda_2)=\{w_1\xrightarrow{2}w_2\xrightarrow{1}w_3\}$ of the dual three-dimensional module, whose weights are $\lambda_2,\lambda_1-\lambda_2,-\lambda_1$: the correspondence $u_3^\vee\mapsto w_1$, $u_2^\vee\mapsto w_2$, $u_1^\vee\mapsto w_3$ preserves colours, weights (using the displayed negated weights directly) and $\varepsilon,\varphi$. The only input taken from [F3] is its finite computation of the arrows, weights and $\varepsilon$-values of the standard crystal; the component identification in that example, the sole use of the axiom of choice there, is not used here. [step 1.1, F1, F3]

3.1 (C) On the four vertices of $B(1)\otimes B(1)$ compute both sides of the swap with the two-case rule of [F4]: the dual of the original highest vertex $v_0\otimes v_0$ maps to $v_0^\vee\otimes v_0^\vee$, which is lowest of weight $-2\lambda_1$ on the right; its three-element chain is the reversed $B(2)$ because the dual of a one-colour chain of length three is the same chain run backwards by step 1.1, and the isolated vertex $v_0\otimes v_1$ maps to the isolated $v_1^\vee\otimes v_0^\vee$ of weight $0$; both are fixed by $\tilde e_1$ and $\tilde f_1$ by the arrow computation of (A). Hence both sides split as $B(2)\sqcup B(0)$. [step 1.1, step 2.1, F1, F4, F5]

4.1 Every step used only the defining formulas of [F1] and finitely many vertices; no choice principle and no general uniqueness theorem is invoked. [step 3.1, given] ∎
