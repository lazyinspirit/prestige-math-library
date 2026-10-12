---
id: prop-dual-crystal-and-reversal-conventions
kind: proposition
title: "The dual crystal: reversed arrows, negated weights and swapped $\\varepsilon/\\varphi$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tensor-product-of-crystals, def-crystal-graph-epsilon-phi-and-weight, def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators, def-kashiwara-lattices-lambda-and-infinity, lem-crystal-tensor-product-weight-epsilon-and-phi-formulas]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mark Shimozono, Crystals for Dummies (lecture notes, 28 August 2005)"
      url: "https://www.aimath.org/WWN/kostka/crysdumb.pdf"
      locator: "§2.3.5, formulas (2.17): $f_i(b^\\vee)=e_i(b)^\\vee$, $e_i(b^\\vee)=f_i(b)^\\vee$, $\\varphi_i(b^\\vee)=\\varepsilon_i(b)$, $\\varepsilon_i(b^\\vee)=\\varphi_i(b)$, $wt(b^\\vee)=-wt(b)$, 'this construction comes from the contragredient dual of a module'; and Lemma 2.28, $(B_1\\otimes B_2)^\\vee\\cong B_2^\\vee\\otimes B_1^\\vee$ via $(b_1\\otimes b_2)^\\vee\\mapsto b_2^\\vee\\otimes b_1^\\vee$."
    - title: "Sami Assaf, Anne Dranowski and Nicolle Gonzalez, Extremal tensor products of Demazure crystals, arXiv:2210.10236"
      url: "https://arxiv.org/pdf/2210.10236"
      locator: "§2, axioms (C1)-(C4): the crystal axioms verified here, including $b'=e_i(b)\\Leftrightarrow b=f_i(b')$ and $\\varphi_i(b)-\\varepsilon_i(b)=\\langle\\alpha_i^\\vee,wt(b)\\rangle$."
    - title: "Mark Shimozono, Crystals for Dummies (lecture notes, 28 August 2005)"
      url: "https://www.aimath.org/WWN/kostka/crysdumb.pdf"
      locator: "§2.3.4, Warning 2.18: the source's tensor product order is the opposite of the convention used here; the swap statement (ii) is formulated for the library's left-to-right convention and proved locally, so no convention transfer is left implicit."
---

## Statement

Let $B$ be the crystal of a crystal basis $(L,B)$ of an integrable module ([[def-crystal-lattice-and-crystal-basis]], [[def-crystal-graph-epsilon-phi-and-weight]]); its operators are the partial maps $\tilde e_i,\tilde f_i:B\to B\cup\{0\}$ satisfying $\tilde e_ib=b'$ if and only if $b=\tilde f_ib'$, and $\varepsilon_i,\varphi_i\in\mathbb Z_{\ge0}$ satisfy $\varphi_i(b)-\varepsilon_i(b)=\langle h_i,wt(b)\rangle$.

Define the **dual crystal** $B^\vee:=\{b^\vee:b\in B\}$ by

$$wt(b^\vee):=-wt(b),\qquad \varepsilon_i(b^\vee):=\varphi_i(b),\qquad \varphi_i(b^\vee):=\varepsilon_i(b),\qquad \tilde f_i(b^\vee):=(\tilde e_ib)^\vee,\qquad \tilde e_i(b^\vee):=(\tilde f_ib)^\vee,$$

with $0^\vee:=0$. Then:

(i) $B^\vee$ satisfies the crystal axioms: $(\tilde e_i,\tilde f_i)$ are partial inverses, the arrows of $B^\vee$ are the arrows of $B$ with orientation reversed, the displayed $\varepsilon_i,\varphi_i$ are exactly the maximal iterated powers, and $(B^\vee)^\vee=B$ canonically;

(ii) **tensor products reverse order.** For crystals $B_1,B_2$ as above the map $b_1\otimes b_2\mapsto b_2^\vee\otimes b_1^\vee$ is an isomorphism of crystals $(B_1\otimes B_2)^\vee\to B_2^\vee\otimes B_1^\vee$ for the tensor product of [[def-tensor-product-of-crystals]].

The construction is stated for crystals of crystal bases of integrable modules, where $\varepsilon_i,\varphi_i$ are finite and nonnegative. For the negative-half crystal of [[def-kashiwara-lattices-lambda-and-infinity]] only the formal $\varphi_i=\varepsilon_i+\langle h_i,wt\rangle$, which may be negative, is defined, and no dual is asserted there. No choice principle is used.

## Facts & Assumptions

**Given:** The crystal $(B,wt,\varepsilon_i,\varphi_i,\tilde e_i,\tilde f_i)$ of a crystal basis $(L,B)$ of an integrable module ([[def-crystal-lattice-and-crystal-basis]]), and in (ii) two such crystals $B_1,B_2$; the dual $B^\vee$ as defined in the Statement.

[F1] Crystal graph invariants ([[def-crystal-graph-epsilon-phi-and-weight]]): $\varepsilon_i(b)=\max\{n:\tilde e_i^{\,n}b\ne0\}$ and $\varphi_i(b)=\max\{n:\tilde f_i^{\,n}b\ne0\}$ are finite and nonnegative on $B$, $\varphi_i(b)=\varepsilon_i(b)+\langle h_i,wt(b)\rangle$, and along an existing edge $\tilde f_ib=b'$ one has $\varepsilon_i(b')=\varepsilon_i(b)+1$, $\varphi_i(b')=\varphi_i(b)-1$, with the dual statement for $\tilde e_i$.

[F2] Crystal basis axioms ([[def-crystal-lattice-and-crystal-basis]]): $\tilde e_i,\tilde f_i$ are partial maps $B\to B\cup\{0\}$ with $\tilde f_ib=b'$ if and only if $b=\tilde e_ib'$; the underlying module strings are finite and the Kashiwara operators of [[def-kashiwara-crystal-operators]] act as string shifts.

[F3] The tensor product crystal and its rules ([[def-tensor-product-of-crystals]]), including weight additivity and the strict/non-strict comparison split.

[F4] The $\varepsilon/\varphi$ formulas ([[lem-crystal-tensor-product-weight-epsilon-and-phi-formulas]]): for $B_1\otimes B_2$ the max formulas for $\varepsilon_i,\varphi_i$ hold, and the branch used by $\tilde f_i$ is exactly $\varphi_i(b_1)>\varepsilon_i(b_2)$ versus $\varphi_i(b_1)\le\varepsilon_i(b_2)$.

[F5] The negative-half crystal of [[def-kashiwara-lattices-lambda-and-infinity]] carries only the formal quantity $\varphi_i=\varepsilon_i+\langle h_i,wt\rangle$, which may be negative, and no finite dual construction is asserted for it.

## Proof

**Proof technique:** direct.

1.1 Partial inverses and reversed arrows. By definition $\tilde f_i(b^\vee)=b'^\vee$ holds exactly when $\tilde e_ib=b'$, which by the partial-inverse axiom of $B$ holds exactly when $b=\tilde f_ib'$, i.e. when $b^\vee=\tilde e_i(b'^\vee)$; hence the pair $(\tilde e_i,\tilde f_i)$ on $B^\vee$ satisfies the partial-inverse axiom. Moreover the arrows of $B^\vee$ are those of $B$ run backwards: an arrow $b^\vee\to b'^\vee$ in $B^\vee$ means $\tilde f_i(b^\vee)=b'^\vee$, i.e. $\tilde e_ib=b'$, i.e. $\tilde f_ib'=b$, which is the arrow $b'\to b$ of $B$. [F1, F2]

2.1 The displayed $\varepsilon_i,\varphi_i$ are the maximal iterated powers. By induction on $n$, $\tilde e_i^{\,n}(b^\vee)=(\tilde f_i^{\,n}b)^\vee$ and $\tilde f_i^{\,n}(b^\vee)=(\tilde e_i^{\,n}b)^\vee$; hence $\max\{n:\tilde e_i^{\,n}(b^\vee)\ne0\}=\max\{n:\tilde f_i^{\,n}b\ne0\}=\varphi_i(b)$ and $\max\{n:\tilde f_i^{\,n}(b^\vee)\ne0\}=\varepsilon_i(b)$, as displayed; the weight pairing is preserved, $\varphi_i(b^\vee)-\varepsilon_i(b^\vee)=\varepsilon_i(b)-\varphi_i(b)=-\langle h_i,wt(b)\rangle=\langle h_i,wt(b^\vee)\rangle$, and involutivity $(B^\vee)^\vee=B$ holds because $(b^\vee)^\vee:=b$ restores the operators, weights and string data. This proves (i). [step 1.1, F1, F2]

3.1 The tensor swap preserves the operators. Let $S((b_1\otimes b_2)^\vee):=b_2^\vee\otimes b_1^\vee$ and put $p:=\varphi_i(b_1)$, $s:=\varepsilon_i(b_2)$. The $\tilde f_i$ operator on the dual input is the dual of $\tilde e_i$ on $b_1\otimes b_2$: if $p\ge s$ the tensor rule applies $\tilde e_i$ to the first factor, so $\tilde f_i((b_1\otimes b_2)^\vee)=(b_2\otimes\tilde e_ib_1)^\vee=b_2^\vee\otimes(\tilde e_ib_1)^\vee=b_2^\vee\otimes\tilde f_i(b_1^\vee)$, while on the target the $\tilde f_i$-rule selects the second factor exactly when $\varphi_i(b_2^\vee)=s\le p=\varepsilon_i(b_1^\vee)$; if $p<s$ the tensor rule applies $\tilde e_i$ to the second factor, so $\tilde f_i((b_1\otimes b_2)^\vee)=(b_1\otimes\tilde e_ib_2)^\vee=\tilde f_i(b_2^\vee)\otimes b_1^\vee$, while the target rule selects the first factor because $\varphi_i(b_2^\vee)=s>p=\varepsilon_i(b_1^\vee)$. Similarly for $\tilde e_i$: if $p>s$ the tensor rule applies $\tilde f_i$ to the first factor, so $\tilde e_i((b_1\otimes b_2)^\vee)=b_2^\vee\otimes\tilde e_i(b_1^\vee)$, which is the target $\tilde e_i$ acting on its second factor because $\varepsilon_i(b_2)=s<p=\varphi_i(b_1)$; and if $p\le s$ it acts on the second factor and $\tilde e_i((b_1\otimes b_2)^\vee)=\tilde e_i(b_2^\vee)\otimes b_1^\vee$, the target $\tilde e_i$ acting on its first factor because $s\ge p$. Zero endpoints agree on both sides, and the target weight is $-wt(b_1)-wt(b_2)$, the weight of the dual input. [step 2.1, F3, F4, algebra]

4.1 Conclusion. The map $S$ is a bijection of vertex sets by construction, and step 3.1 shows that it intertwines $\tilde e_i$ and $\tilde f_i$ for every $i$; it preserves weights by step 2.1, hence it is an isomorphism of crystals $(B_1\otimes B_2)^\vee\to B_2^\vee\otimes B_1^\vee$, which is (ii). Because $s$ and $p$ range over finite nonnegative integers, the case analysis covers all vertices, including the tie $p=s$ where both readings agree. All constructions are explicit set-theoretic operations on the vertex set $B$ and the fixed operator maps, so no choice principle is used; the construction is stated only for crystals of integrable-module crystal bases, the negative-half case being excluded in the Statement. [step 3.1, step 2.1, F3, F5, given] ∎
