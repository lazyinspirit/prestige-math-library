---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-dual-crystal-reverses-arrows-and-weights.json
  precheck: pass
id: ex-dual-crystal-reverses-arrows-and-weights
kind: example
title: "Dual crystals reverse arrows and weights: two small computations"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-dual-crystal-and-reversal-conventions, def-tensor-product-of-crystals, lem-crystal-tensor-product-weight-epsilon-and-phi-formulas, def-crystal-graph-epsilon-phi-and-weight, def-kashiwara-lattices-lambda-and-infinity, ex-tensor-crystal-b-one-tensor-b-one-for-sl-two, ex-highest-components-in-a-small-type-a-two-tensor-crystal, thm-quantized-sl-two-string-formulas, def-drinfeld-jimbo-quantized-enveloping-algebra, thm-integrable-quantum-highest-weight-module-exists-and-is-unique, def-kashiwara-crystal-operators, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 12
proof_strategy: direct
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

[F6] The defining quantum-group relations and their universal factorization are those of [[def-drinfeld-jimbo-quantized-enveloping-algebra]]. A nonzero integrable cyclic highest weight module of dominant weight $\lambda$ is isomorphic to $V(\lambda)$ by [[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]](ii).

[F7] The module Kashiwara operators shift divided-power strings and commute with module isomorphisms ([[def-kashiwara-crystal-operators]]). The canonical lattice and residue set are generated by their lowering words from the highest vector ([[def-kashiwara-lattices-lambda-and-infinity]]).

[F8] The antipode formulas are $S(K_h)=K_{-h}$, $S(E_i)=-E_iK_i$ and $S(F_i)=-K_i^{-1}F_i$ ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]); on a finite-dimensional module's linear dual the contragredient action is $(x\xi)(v)=\xi(S(x)v)$, which is a left action because $S(xy)=S(y)S(x)$.

## Verification

**Proof technique:** direct.

1.1 (A) Apply $\tilde f_1(b^\vee)=(\tilde e_1b)^\vee$ and $\tilde e_1(b^\vee)=(\tilde f_1b)^\vee$ of [F1] to $b=v_0,v_1$: $\tilde e_1v_0=0$ gives $\tilde f_1(v_0^\vee)=0$; $\tilde e_1v_1=v_0$ gives $\tilde f_1(v_1^\vee)=v_0^\vee$; $\tilde f_1v_0=v_1$ gives $\tilde e_1(v_0^\vee)=v_1^\vee$; $\tilde f_1v_1=0$ gives $\tilde e_1(v_1^\vee)=0$. So the only arrow is $v_1^\vee\xrightarrow{1}v_0^\vee$ and the values $(\varepsilon_1,\varphi_1)=(\varphi_1,\varepsilon_1)$ are $(1,0)$ at $v_0^\vee$ and $(0,1)$ at $v_1^\vee$; weights are negated by [F1]. Comparing with [F2], the map $v_1^\vee\mapsto v_0$, $v_0^\vee\mapsto v_1$ preserves arrows, weights and $\varepsilon/\varphi$, so $B(1)^\vee\cong B(1)$ with highest vertex $v_1^\vee$. [given, F1, F2]

1.2 (B) By [F1] the arrows become $u_3^\vee\xrightarrow{2}u_2^\vee\xrightarrow{1}u_1^\vee$, with weights $\lambda_2,\lambda_1-\lambda_2,-\lambda_1$ along that chain. The pairs $(\varepsilon_1,\varphi_1)$ at $(u_1^\vee,u_2^\vee,u_3^\vee)$ are $(1,0),(0,1),(0,0)$, and the color-two pairs are $(0,0),(1,0),(0,1)$. Construct a module on $w_1,w_2,w_3$ with these successive weights: set $F_2w_1=w_2$, $F_1w_2=w_3$, $E_2w_2=w_1$, $E_1w_3=w_2$, all other $E_i,F_i$ images zero, and $K_hw_j=q^{\langle wt(w_j),h\rangle}w_j$. These maps satisfy [F6]: the weight shifts give the toral relations, the same-color commutators have diagonal entries $(0,1,-1)$ and $(1,-1,0)$, matching $(K_i-K_i^{-1})/(q_i-q_i^{-1})$, and the cross-color commutators vanish. Each $E_i^2,F_i^2$ and each alternating triple $E_iE_jE_i,F_iF_jF_i$ with $i\ne j$ vanishes, proving both $A_2$ Serre relations. The module is nonzero, integrable and generated by its highest vector $w_1$ of dominant weight $\lambda_2$, so [F6](ii) identifies it with $V(\lambda_2)$. Each color has one length-one string and one trivial string; [F7] therefore makes the canonical lattice $\bigoplus_jA_0w_j$ with residue crystal $B(\lambda_2)$. The map $u_3^\vee\mapsto w_1$, $u_2^\vee\mapsto w_2$, $u_1^\vee\mapsto w_3$ preserves all crystal data. To check the module-dual description as well, realize the standard module by $F_1u_1=u_2$, $F_2u_2=u_3$, $E_1u_2=u_1$, $E_2u_3=u_2$, the given weights and zero remaining images. The same relation check with colors exchanged identifies this cyclic integrable module with $V(\lambda_1)$ by [F6]. For its linear dual basis $u_j^*$, [F8] gives the displayed $w$-actions on $w_1=u_3^*$, $w_2=-q_1u_2^*$, $w_3=q_1^2u_1^*$ (here $q_1=q_2$). Thus $V(\lambda_2)$ is the dual three-dimensional module, without a crystal-component uniqueness or AC premise. [F1, F3, F6, F7, F8, algebra]

2.1 (C) The swap sends $(v_j\otimes v_k)^\vee$ to $v_k^\vee\otimes v_j^\vee$. On the right the three-element lowering chain is $(v_1^\vee\otimes v_1^\vee)\to(v_0^\vee\otimes v_1^\vee)\to(v_0^\vee\otimes v_0^\vee)$, with weights $2\lambda_1,0,-2\lambda_1$; each next raising reverses the preceding arrow by [F4]. The remaining vertex $v_1^\vee\otimes v_0^\vee$ has weight zero and both operators vanish there: the tie $\varphi_1(v_1^\vee)=\varepsilon_1(v_0^\vee)=1$ selects the bottom second factor for lowering and the top first factor for raising. This is the image of the isolated dual vertex $(v_0\otimes v_1)^\vee$. The reversed three-element chain is $B(2)$ and the isolated vertex is $B(0)$ by [F5], so both sides have the claimed decomposition. [step 1.1, F1, F2, F4, F5]

3.1 The arrow and tensor calculations are finite applications of [F1]; the canonical identification in (B) uses the explicit relation check, highest-weight module universality [F6] and lowering-word construction [F7]. No choice principle or general crystal-component uniqueness theorem is invoked. [step 1.2, step 2.1, F1, F6, F7, given] ∎


## Remarks

The solid arrows below are the lowering operators, labelled by their colors. The dashed vertical arrows give the crystal isomorphisms from steps 1.1 and 1.2. Weights are displayed above the dual vertices; reversing the original arrows and negating their weights gives exactly these two dual chains. In the lower comparison row, $w_1,w_2,w_3$ are the residue vertices constructed in step 1.2, in $B(\lambda_2)$. The verification above is independent of the illustration.

```tikz
\begin{tikzpicture}[>=stealth, x=1cm, y=1cm]
\node at (-1.5,0) {$B(1)^\vee$};
\node (a) at (0,0) {$v_1^\vee$};
\node (b) at (4,0) {$v_0^\vee$};
\node at (0,0.6) {$\lambda_1$};
\node at (4,0.6) {$-\lambda_1$};
\draw[->] (a) -- node[above] {$1$} (b);
\node at (-1.5,-1.5) {$B(1)$};
\node (c) at (0,-1.5) {$v_0$};
\node (d) at (4,-1.5) {$v_1$};
\draw[->] (c) -- node[above] {$1$} (d);
\draw[->,dashed] (a) -- (c);
\draw[->,dashed] (b) -- (d);
\node at (-1.5,-3.5) {$B(\lambda_1)^\vee$};
\node (e) at (0,-3.5) {$u_3^\vee$};
\node (f) at (3,-3.5) {$u_2^\vee$};
\node (g) at (6,-3.5) {$u_1^\vee$};
\node at (0,-2.9) {$\lambda_2$};
\node at (3,-2.9) {$\lambda_1-\lambda_2$};
\node at (6,-2.9) {$-\lambda_1$};
\draw[->] (e) -- node[above] {$2$} (f);
\draw[->] (f) -- node[above] {$1$} (g);
\node at (-1.5,-5) {$B(\lambda_2)$};
\node (h) at (0,-5) {$w_1$};
\node (i) at (3,-5) {$w_2$};
\node (j) at (6,-5) {$w_3$};
\draw[->] (h) -- node[above] {$2$} (i);
\draw[->] (i) -- node[above] {$1$} (j);
\draw[->,dashed] (e) -- (h);
\draw[->,dashed] (f) -- (i);
\draw[->,dashed] (g) -- (j);
\end{tikzpicture}
```
