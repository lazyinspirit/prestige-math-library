---
id: cex-changing-the-tensor-equality-convention-changes-the-crystal
kind: counterexample
title: "Changing the equality case in the tensor rule breaks the partial-inverse axiom"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
deps: [def-tensor-product-of-crystals, thm-crystal-basis-tensor-product-rule, lem-crystal-tensor-product-weight-epsilon-and-phi-formulas, lem-rank-one-tensor-strings-have-the-crystal-limit-rule, def-crystal-graph-epsilon-phi-and-weight, def-crystal-lattice-and-crystal-basis]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§5, printed pp. 20-21, Theorem 5.2: the strict/non-strict comparison split between $\\tilde f_i$ and $\\tilde e_i$ that the counterexample shows cannot be replaced by a uniform convention."
    - title: "Mark Shimozono, Crystals for Dummies (lecture notes, 28 August 2005)"
      url: "https://www.aimath.org/WWN/kostka/crysdumb.pdf"
      locator: "§2.3.4, Warning 2.18: conventions for the tensor product differ in the literature, and the comparison direction is part of the data; the item fixes the library's convention and records the failure of the uniform alternatives."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.3, printed pp. 333-335: the reduction of the tensor rule to the rank-one case used here at $a=b=2$."
---

## Statement refuted

Claim refuted: on the product of two crystals one may exchange the two equality cases while retaining the comparison direction, namely

$$\tilde f_i^{\prime}(b_1\otimes b_2)=\tilde f_ib_1\otimes b_2\ \text{ if }\ \varphi_i(b_1)\ge\varepsilon_i(b_2),\qquad \tilde e_i^{\prime}(b_1\otimes b_2)=\tilde e_ib_1\otimes b_2\ \text{ if }\ \varphi_i(b_1)>\varepsilon_i(b_2),$$

with the second factor used in the remaining cases and $0$ whenever the selected factor maps to $0$; that is, the two equality cases of [[def-tensor-product-of-crystals]] are exchanged.

Counterexample: take $\mathfrak g=\mathfrak{sl}_2$, the rank-one simples of highest weights $a=b=2$ with divided bases $v_j=F_1^{(j)}v_0,\ w_k=F_1^{(k)}w_0$, and the vertex $b=v_1\otimes w_1$. Then $\varphi_1(v_1)=1=\varepsilon_1(w_1)$, so the modified rule uses the non-strict comparison and acts on the first factor: $\tilde f_1^{\prime}(v_1\otimes w_1)=v_2\otimes w_1$. At the image $b'=v_2\otimes w_1$ one has $\varphi_1(v_2)=0\le\varepsilon_1(w_1)=1$, and the modified $\tilde e_1^{\prime}$ acts on the first factor only when $\varphi_1>\varepsilon_1$, so it acts on the second factor: $\tilde e_1^{\prime}(v_2\otimes w_1)=v_2\otimes w_0\ne v_1\otimes w_1$. Hence $\tilde f_1^{\prime}b=b'$ while $\tilde e_1^{\prime}b'\ne b$: the partial-inverse axiom fails, so $(B(a)\otimes B(b),\tilde e^{\prime},\tilde f^{\prime})$ is not a crystal, and a fortiori not the crystal $B(a)\otimes B(b)$ of [[thm-crystal-basis-tensor-product-rule]]. The same failure occurs if one uses the strict comparison for both operators, or the non-strict comparison for both; by contrast the rank-one computation of [[lem-rank-one-tensor-strings-have-the-crystal-limit-rule]] shows that with the convention of [[def-tensor-product-of-crystals]] the string through $v_0\otimes w_1$ is $v_0\otimes w_1,v_1\otimes w_1,v_1\otimes w_2$ of length three, whereas the modified rule produces the four-element chain $v_0\otimes w_1,v_1\otimes w_1,v_2\otimes w_1,v_2\otimes w_2$, so the modified rule has the wrong lowering-chain length and cannot be the crystal of $V(2)\otimes V(2)=V(4)\oplus V(2)\oplus V(0)$.

## Facts & Assumptions

**Given:** The rank-one case $\mathfrak g=\mathfrak{sl}_2$, $i=1$, the simples of highest weights $a=b=2$ with divided bases $v_j=F_1^{(j)}v_0$, $w_k=F_1^{(k)}w_0$ ($0\le j,k\le2$), the vertex $b=v_1\otimes w_1$, and the modified pair of operators $\tilde f_1^{\prime},\tilde e_1^{\prime}$ of the Statement refuted.

[F1] The tensor product crystal ([[def-tensor-product-of-crystals]]): the library convention uses the strict comparison for $\tilde f_i$ and the non-strict comparison for $\tilde e_i$, i.e. $\tilde f_i$ acts on the first factor if and only if $\varphi_i(b_1)>\varepsilon_i(b_2)$ and $\tilde e_i$ if and only if $\varphi_i(b_1)\ge\varepsilon_i(b_2)$, with value $0$ when the chosen factor maps to $0$.

[F2] The tensor rule theorem ([[thm-crystal-basis-tensor-product-rule]]): $(L_1\otimes L_2,B_1\otimes B_2)$ with the convention [F1] is a crystal basis of $M_1\otimes M_2$; in particular its operators satisfy the partial-inverse axiom $\tilde f_ib=b'\iff b=\tilde e_ib'$.

[F3] The rank-one tensor strings ([[lem-rank-one-tensor-strings-have-the-crystal-limit-rule]]): for divided bases $v_j=F^{(j)}v_0$, $w_k=F^{(k)}w_0$ of rank-one simples of highest weights $a,b\ge0$ one has, modulo $q$, $\tilde f(v_j\otimes w_k)=v_{j+1}\otimes w_k$ if $a-j>k$ and $v_j\otimes w_{k+1}$ otherwise, with zero outside the divided-basis ranges; in particular for $a=b=2$ the string through $v_0\otimes w_1$ is $v_0\otimes w_1\to v_1\otimes w_1\to v_1\otimes w_2$.

[F4] Crystal graph invariants ([[def-crystal-graph-epsilon-phi-and-weight]]): on the rank-one chain $v_0\xrightarrow{1}v_1\xrightarrow{1}v_2$ one has $\varepsilon_1(v_j)=j$ and $\varphi_1(v_j)=2-j$, and likewise for the $w_k$.

[F5] The partial-inverse axiom of a crystal basis ([[def-crystal-lattice-and-crystal-basis]]): for the crystal of a module one has $\tilde f_ib=b'$ if and only if $b=\tilde e_ib'$; a coloured graph for which this fails is not a crystal of a crystal basis.

[F6] The $\varepsilon/\varphi$ bookkeeping of the tensor product ([[lem-crystal-tensor-product-weight-epsilon-and-phi-formulas]]) fixes which comparison governs each operator in [F1] and identifies the equality case.

## Counterexample

**Proof technique:** direct.

1.1 Set $a=b=2$ and index the divided bases by their string positions, so that $\varepsilon_1(v_j)=j$, $\varphi_1(v_j)=2-j$ and similarly $\varepsilon_1(w_k)=k$, $\varphi_1(w_k)=2-k$ by [F4]. The vertex $v_1\otimes w_1$ satisfies $\varphi_1(v_1)=1=\varepsilon_1(w_1)$; this is the equality case in which the conventions differ. [given, F4]

2.1 Under the modified rule $\tilde f_1^{\prime}$ acts on the first factor at this vertex, because it uses $\varphi_1\ge\varepsilon_1$: $\tilde f_1^{\prime}(v_1\otimes w_1)=v_2\otimes w_1$. [step 1.1]

3.1 At $v_2\otimes w_1$ one has $\varphi_1(v_2)=0$ and $\varepsilon_1(w_1)=1$, so both the modified and the original rule select a factor by the comparison of $0$ with $1$; the modified $\tilde e_1^{\prime}$ acts on the first factor only when $\varphi_1>\varepsilon_1$, which fails, so it acts on the second: $\tilde e_1^{\prime}(v_2\otimes w_1)=v_2\otimes w_0$. [step 2.1, algebra]

4.1 Therefore $\tilde e_1^{\prime}\tilde f_1^{\prime}(v_1\otimes w_1)=v_2\otimes w_0\ne v_1\otimes w_1$, contradicting [F5]. For the strict-for-both variant use $v_0\otimes w_1$: lowering gives $v_1\otimes w_1$, but strict raising at the tie acts on the second factor and gives $v_1\otimes w_0$. For the non-strict-for-both variant use $v_1\otimes w_1$: lowering gives $v_2\otimes w_1$, and raising gives $v_2\otimes w_0$. Thus each alternative fails partial inversion. [step 3.1, step 1.1, F4, F5]

5.1 Compare component sizes: the original rank-one tensor rule of [F3] gives $\tilde f_1(v_j\otimes w_k)=v_{j+1}\otimes w_k$ if $2-j>k$ and $v_j\otimes w_{k+1}$ otherwise; through $v_0\otimes w_1$ this is $v_0\otimes w_1\to v_1\otimes w_1\to v_1\otimes w_2$, a chain of three, which is the component $B(2)$ in the decomposition of $V(2)\otimes V(2)=V(4)\oplus V(2)\oplus V(0)$. The modified rule instead produces $v_0\otimes w_1\to v_1\otimes w_1\to v_2\otimes w_1\to v_2\otimes w_2\to0$, a chain of four, which is not a component of the crystal of any module in that decomposition. [step 4.1, F3]

6.1 With the library comparison direction fixed, exchanged equality cases and either uniform comparison fail the partial-inverse axiom. The exchanged-equality lowering chain also has a length absent from the correct rank-one crystal, while the library convention satisfies both the axiom and the rank-one string computation. [step 4.1, step 5.1, F1, F2, F6] ∎