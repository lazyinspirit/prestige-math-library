---
id: lem-crystal-tensor-product-weight-epsilon-and-phi-formulas
kind: lemma
title: "The weight, $\\varepsilon_i$ and $\\varphi_i$ formulas for the tensor product crystal"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tensor-product-of-crystals, thm-crystal-basis-tensor-product-rule, def-crystal-graph-epsilon-phi-and-weight, def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
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
    - title: "Sami Assaf, Anne Dranowski and Nicolle Gonzalez, Extremal tensor products of Demazure crystals, arXiv:2210.10236"
      url: "https://arxiv.org/pdf/2210.10236"
      locator: "§5: 'with maps $wt(b_1\\otimes b_2)=wt(b_1)+wt(b_2)$, $\\varepsilon_i(b_1\\otimes b_2)=\\max(\\varepsilon_i(b_1),\\varepsilon_i(b_2)-\\mathrm{wt}_i(b_1))$, $\\varphi_i(b_1\\otimes b_2)=\\max(\\varphi_i(b_2),\\varphi_i(b_1)+\\mathrm{wt}_i(b_2))$', together with the two displayed operator rules including the strict/non-strict split."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4, printed pp. 17-18, Propositions 4.8-4.9 and (4.7): the behaviour of $\\varepsilon_i,\\varphi_i$ along strings and $\\varphi_i(b)=\\varepsilon_i(b)+\\langle h_i,wt(b)\\rangle$, used to run the induction of (b)."
    - title: "Mark Shimozono, Crystals for Dummies (lecture notes, 28 August 2005)"
      url: "https://www.aimath.org/WWN/kostka/crysdumb.pdf"
      locator: "§2.3.4: the parenthesis form of the rule, equivalent to the two max formulas."
---

## Statement

Let $(L_1,B_1),(L_2,B_2)$ be crystal bases of integrable modules as in [[thm-crystal-basis-tensor-product-rule]] and let $B_1\otimes B_2$ be the tensor product crystal of [[def-tensor-product-of-crystals]] with the two-case operators of that theorem. Then for all $b_1\in B_1$, $b_2\in B_2$ and $i\in I$:

(a) $wt(b_1\otimes b_2)=wt(b_1)+wt(b_2)$;

(b) $\varepsilon_i(b_1\otimes b_2)=\max\bigl(\varepsilon_i(b_1),\ \varepsilon_i(b_2)-\langle h_i,wt(b_1)\rangle\bigr)$;

(c) $\varphi_i(b_1\otimes b_2)=\max\bigl(\varphi_i(b_1)+\langle h_i,wt(b_2)\rangle,\ \varphi_i(b_2)\bigr)$;

(d) the two cases are exactly the alternatives in the max formulas: $\tilde f_i$ acts on the first factor if and only if $\varphi_i(b_1)>\varepsilon_i(b_2)$, and then $\varepsilon_i(b_1\otimes b_2)=\varepsilon_i(b_1)$ (this equality also holds at the tie); it acts on the second factor if and only if $\varphi_i(b_1)\le\varepsilon_i(b_2)$, and then $\varepsilon_i(b_1\otimes b_2)=\varepsilon_i(b_2)-\langle h_i,wt(b_1)\rangle$, and dually $\tilde e_i$ acts on the first factor if and only if $\varphi_i(b_1)\ge\varepsilon_i(b_2)$;

(e) **partial-inverse property.** For all $b,b'\in B_1\otimes B_2$ and every $i$, $\tilde f_ib=b'$ if and only if $b=\tilde e_ib'$; in particular the assignment of the non-strict comparison to $\tilde e_i$ and the strict comparison to $\tilde f_i$ is the one for which the two-case rule is internally consistent;

(f) along the $i$-string, $\varepsilon_i(\tilde f_i^{\,n}(b_1\otimes b_2))=\varepsilon_i(b_1\otimes b_2)+n$ and $\varphi_i(\tilde f_i^{\,n}(b_1\otimes b_2))=\varphi_i(b_1\otimes b_2)-n$ for $0\le n\le\varphi_i(b_1\otimes b_2)$.

No choice principle is used.

## Facts & Assumptions

**Given:** Crystal bases $(L_1,B_1),(L_2,B_2)$ of integrable modules, the tensor product crystal $B_1\otimes B_2$ of [[def-tensor-product-of-crystals]] with the operators of [[thm-crystal-basis-tensor-product-rule]], vertices $b_1\in B_1$, $b_2\in B_2$ and $i\in I$; write $p:=\varphi_i(b_1)$, $a:=\varepsilon_i(b_1)$, $s:=\varepsilon_i(b_2)$, $r:=\varphi_i(b_2)$.

[F1] The tensor product crystal ([[def-tensor-product-of-crystals]]): $wt(b_1\otimes b_2)=wt(b_1)+wt(b_2)$, and $\tilde f_i,\tilde e_i$ act on the factor selected by the strict/non-strict comparison of $\varphi_i$ of the first factor with $\varepsilon_i$ of the second, with value $0$ when the selected factor maps to $0$.

[F2] The tensor rule theorem ([[thm-crystal-basis-tensor-product-rule]]): the displayed two-case operators make $(L_1\otimes L_2,B_1\otimes B_2)$ a crystal basis of $M_1\otimes M_2$, they map $B_1\otimes B_2$ into $(B_1\otimes B_2)\cup\{0\}$, and they satisfy the partial-inverse axiom $\tilde f_ib=b'\iff b=\tilde e_ib'$ for all $b,b'\in B_1\otimes B_2$.

[F3] Crystal graph invariants ([[def-crystal-graph-epsilon-phi-and-weight]]): for every $b$ in the crystal of an integrable module, $\varepsilon_i(b)=\max\{n:\tilde e_i^{\,n}b\ne0\}$ and $\varphi_i(b)=\max\{n:\tilde f_i^{\,n}b\ne0\}$ are finite and nonnegative, $\varphi_i(b)=\varepsilon_i(b)+\langle h_i,wt(b)\rangle$, the $i$-string of $b$ has $\varepsilon_i(b)+\varphi_i(b)+1$ vertices, and along each existing edge $\tilde f_ib=b'$ one has $\varepsilon_i(b')=\varepsilon_i(b)+1$ and $\varphi_i(b')=\varphi_i(b)-1$ (dually for $\tilde e_i$).

[F4] Crystal lattice and basis axioms ([[def-crystal-lattice-and-crystal-basis]]) and the Kashiwara operators ([[def-kashiwara-crystal-operators]]) supplying the underlying finite strings and partial inverses of the two factors.

## Proof

**Proof technique:** direct.

1.1 The two integer pairs $(p,a)$ and $(s,r)$ determine the strings and the pairings: $p-a=\langle h_i,wt(b_1)\rangle$ and $r-s=\langle h_i,wt(b_2)\rangle$ by [F3], the $i$-string of $b_1$ has $p+a+1$ vertices and that of $b_2$ has $s+r+1$ vertices by [F3], and any $i$-string contains a unique top (a vertex with $\tilde e_i=0$) and a unique bottom (a vertex with $\tilde f_i=0$). [F3, F4]

1.2 One application of $\tilde e_i$ to $b_1\otimes b_2$. If $p\ge s$, the non-strict comparison selects the first factor and $\tilde e_i(b_1\otimes b_2)=\tilde e_ib_1\otimes b_2$ (or $0$ if $a=0$), so the pair $(p,a)$ becomes $(p+1,a-1)$ in the first factor and $s$ is unchanged; if $p<s$, the strict inequality selects the second factor, the pair $(s,r)$ becomes $(s-1,r+1)$ and $(p,a)$ is unchanged. Every application is a genuine existing edge of the corresponding factor precisely in the displayed case, by [F1] and the definition of $\varepsilon_i,\varphi_i$ in [F3]. [F1, F3]

2.1 Computation of $\varepsilon_i(b_1\otimes b_2)=:\varepsilon$. Case $p\ge s$: by step 1.2 every $\tilde e_i$-step acts on the first factor of the current pair, and the first factor offers exactly $a$ applicable steps before the next raising maps its top to $0$; each such step keeps the comparison $p'\ge s$ true because $p$ only increases, so exactly $a$ steps are possible and $\varepsilon=a=\varepsilon_i(b_1)$. Case $p<s$: the first $s-p$ steps act on the second factor, decreasing $s$ to $p$ (each needs $s'>0$, and $s'>p\ge0$ throughout), after which the comparison is $\ge$ and the remaining $a$ steps act on the first factor; exactly $a+s-p$ steps are possible and $\varepsilon=a+(s-p)=\varepsilon_i(b_2)-\langle h_i,wt(b_1)\rangle$ because $s-p+a=a+s-p$ and $p-a=\langle h_i,wt(b_1)\rangle$ by step 1.1. Hence in both cases $\varepsilon=\max(a,s-p+a)=\max\bigl(\varepsilon_i(b_1),\varepsilon_i(b_2)-\langle h_i,wt(b_1)\rangle\bigr)$, which is (b). [step 1.2, step 1.1, F1, F3, algebra]

2.2 Computation of $\varphi_i(b_1\otimes b_2)=:\varphi$. If $p>s$, every $\tilde f_i$-step while the comparison stays strict acts on the first factor and lowers $p$ by one and raises $a$ by one, keeping $s$ fixed, so after $p-s$ steps the comparison is an equality; each of those steps is an existing edge because the current $p'$ satisfies $p'>s\ge0$, so $p'\ge1$. From then on the non-strict comparison selects the second factor, which offers exactly $r$ steps before reaching its bottom. If $p\le s$, all $\tilde f_i$-steps act on the second factor, $r$ steps in all. Hence $\varphi=r+\max(0,p-s)=\max\bigl(\varphi_i(b_2),\varphi_i(b_1)+\langle h_i,wt(b_2)\rangle\bigr)$ because $p-s+r=p+\langle h_i,wt(b_2)\rangle$ by $r-s=\langle h_i,wt(b_2)\rangle$, which is (c). [step 1.2, step 1.1, F1, F3, algebra]

3.1 The branch and tie assertions (d). The step counts of steps 2.1 and 2.2 also identify the branch of the first application: for $\varepsilon$ the first maximum entry $a$ is attained for $p\ge s$, including equality, whereas the first application of $\tilde f_i$ uses the first factor only for $p>s$; the second entry is attained for $p<s$ and equals $s-p+a=\varepsilon_i(b_2)-\langle h_i,wt(b_1)\rangle$; the first application of $\tilde e_i$ uses the first factor exactly for $p\ge s$ and of $\tilde f_i$ exactly for $p>s$, as displayed in [F1]. In particular the maximal value alone does not determine the $\tilde f_i$-branch, while the strict/non-strict split fixes it. [step 2.1, step 2.2, F1, algebra]

4.1 The partial-inverse property (e). Suppose $p>s$ and $b':=\tilde f_i(b_1\otimes b_2)=\tilde f_ib_1\otimes b_2\ne0$; then $\varphi_i(\tilde f_ib_1)=p-1\ge s$ by [F3], so the $\tilde e_i$-rule selects the first factor at $b'$ and $\tilde e_ib'=\tilde e_i\tilde f_ib_1\otimes b_2=b_1\otimes b_2$. Suppose $p\le s$ and $b':=b_1\otimes\tilde f_ib_2\ne0$; then $\tilde f_ib_2\ne0$ and $\varepsilon_i(\tilde f_ib_2)=s+1>p$ by [F3], so the $\tilde e_i$-rule selects the second factor and $\tilde e_ib'=b_1\otimes\tilde e_i\tilde f_ib_2=b_1\otimes b_2$. The converse is the same computation read backwards, and at the tie $p=s$ the split $\tilde e_i$ non-strict, $\tilde f_i$ strict is exactly what makes both readings consistent; this is the partial-inverse axiom already established in [F2], verified here from the explicit two-case logic. [step 3.1, F2, F3]

5.1 Iteration along the string and the choice audit. By [F3] each existing $\tilde f_i$-edge raises $\varepsilon_i$ by one and lowers $\varphi_i$ by one, and by step 4.1 the displayed operators are a consistent partial-inverse structure on $B_1\otimes B_2$; iterating, $\varepsilon_i(\tilde f_i^{\,n}(b_1\otimes b_2))=\varepsilon_i(b_1\otimes b_2)+n$ and $\varphi_i(\tilde f_i^{\,n}(b_1\otimes b_2))=\varphi_i(b_1\otimes b_2)-n$ for all $n\le\varphi_i(b_1\otimes b_2)$, which is (f), and the maximal such $n$ is $\varphi_i(b_1\otimes b_2)$ by [F3]. All steps were finite checks on the two integer pairs $(p,a)$ and $(s,r)$ and the two factor strings; no choice principle is used. [step 4.1, step 3.1, F3, given] ∎
