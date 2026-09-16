---
id: thm-existence-of-a-compact-real-form
kind: theorem
title: Existence of a compact real form
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-real-form-of-a-complex-semisimple-lie-algebra, thm-serre-presentation-theorem, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, cor-opposite-root-spaces-pair-nondegenerately, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, Theorem 6.11 and its proof, printed pp. 348-356"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, §39.4 and Proposition 39.8, printed pp. 203-204"
landmark: true
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every finite-dimensional complex semisimple Lie
algebra $\mathfrak g$ has a compact real form
([[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]): a real form
$\mathfrak k_0$ whose Killing form $B|_{\mathfrak k_0\times\mathfrak k_0}$ is
negative definite.

## Facts & Assumptions

**Given:** The Axiom of Choice and a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ with Killing form $B$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Cartan and root data of [L1], which the Serre presentation theorem selects.

[L1] With a Cartan subalgebra $\mathfrak h$, the root system $\Phi$ is finite, $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with one-dimensional root spaces, and for every root $\alpha$ there are $e_\alpha\in\mathfrak g_\alpha$, $f_\alpha\in\mathfrak g_{-\alpha}$ and $H_\alpha\in\mathfrak h$ with $[e_\alpha,f_\alpha]=H_\alpha$, $\alpha(H_\alpha)=2$, $[H_\alpha,e_\alpha]=2e_\alpha$, $[H_\alpha,f_\alpha]=-2f_\alpha$ and $\beta(H_\alpha)\in\mathbb Z$ for every root $\beta$; also $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ and the Cartan integers are rational ([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-root-sl-two-triple]], [[thm-serre-presentation-theorem]]).

[L2] $B$ is symmetric, invariant and nondegenerate, the center of $\mathfrak g$ is zero, the pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}$ induced by $B$ is nondegenerate, and in the triple above the trace formula gives $B(H_\alpha,H_\alpha)=2B(e_\alpha,f_\alpha)$ ([[thm-cartans-semisimplicity-criterion]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[cor-opposite-root-spaces-pair-nondegenerately]]).



**Proof technique:** direct.

1.1 Fix the data of [L1]. Replacing $(e_\alpha,f_\alpha)$ by $(\lambda_\alpha e_\alpha,\lambda_\alpha^{-1}f_\alpha)$ with $\lambda_\alpha>0$ preserves $[e_\alpha,f_\alpha]=H_\alpha$ and rescales $B(e_\alpha,f_\alpha)$, which is a nonzero real number by [L2] and the trace formula; choosing $\lambda_\alpha$ suitably, and if necessary replacing both vectors by their negatives, we arrange $$B(e_\alpha,f_\alpha)>0\quad\text{and}\quad B(H_\alpha,H_\alpha)=2B(e_\alpha,f_\alpha)>0\qquad\text{for every root }\alpha.$$ [A1, L1, L2, construct]

2.1 The trace formula in the diagonal basis $\{H_1,\dots,H_r\}\cup\{e_\alpha,f_\alpha\}$ of [L1] gives $B(H,H')=2\sum_{\alpha\in\Phi}\alpha(H)\alpha(H')$ for $H,H'\in\mathfrak h$: the eigenvalues of $\operatorname{ad}_H$ are $0$ on $\mathfrak h$ and $\alpha(H)$ on each of $\mathfrak g_\alpha,\mathfrak g_{-\alpha}$. For $H=\sum_\alpha t_\alpha H_\alpha$ with real $t_\alpha$, all $\alpha(H)\in\mathbb R$ by [L1], so $B(H,H)=2\sum_\alpha\alpha(H)^2>0$ for $H\ne0$. [L1, step 1.1, algebra]

2.2 Define $$\mathfrak k_0:=\operatorname{span}_{\mathbb R}\Bigl(\{iH_\alpha:\alpha\in\Phi\}\cup\{e_\alpha-f_\alpha:\alpha\in\Phi\}\cup\{i(e_\alpha+f_\alpha):\alpha\in\Phi\}\Bigr).$$ Then $\mathfrak k_0$ is a real Lie subalgebra. For the Cartan brackets, using $\beta(H_\alpha)\in\mathbb Z$, $$[iH_\alpha,\,e_\beta-f_\beta]=\beta(H_\alpha)\,i(e_\beta+f_\beta)\in\mathfrak k_0,\qquad [iH_\alpha,\,i(e_\beta+f_\beta)]=-\beta(H_\alpha)\bigl(e_\beta-f_\beta\bigr)\in\mathfrak k_0 .$$ For the root pairs write $[e_\alpha,e_\beta]=N_{\alpha\beta}e_{\alpha+\beta}$ when $\alpha+\beta\in\Phi$ and $N_{\alpha\beta}=0$ otherwise; then $[e_\alpha,f_\beta]=-N_{\alpha,-\beta}e_{\alpha-\beta}$, $[f_\alpha,f_\beta]=-N_{-\alpha,-\beta}e_{-\alpha-\beta}$ and $[f_\alpha,e_\beta]=-N_{-\alpha,\beta}e_{\beta-\alpha}$. Invariance of $B$ and $[e_\gamma,f_\gamma]=H_\gamma$ give $$N_{\alpha\beta}B(e_{\alpha+\beta},f_{\alpha+\beta})=B([e_\alpha,e_\beta],f_{\alpha+\beta})=B(e_\alpha,[e_\beta,f_{\alpha+\beta}])=-N_{\beta,-\alpha-\beta}B(e_\alpha,f_\alpha).$$ The $\alpha$-string through $\beta$ is finite and at its two ends one of the constants vanishes; the displayed recursion determines each $N$ from the positive numbers $B(e_\gamma,f_\gamma)$ and the integral string coefficients, so all $N_{\alpha\beta}\in\mathbb R$. Expanding $e_\gamma=\tfrac12\bigl[(e_\gamma-f_\gamma)+i\,i(e_\gamma+f_\gamma)\bigr]$ and $f_\gamma=-\tfrac12\bigl[(e_\gamma-f_\gamma)-i\,i(e_\gamma+f_\gamma)\bigr]$ for $\gamma\in\{\alpha+\beta,\alpha-\beta,-\alpha+\beta,-\alpha-\beta\}$ shows that the three brackets $[e_\alpha-f_\alpha,e_\beta-f_\beta]$, $[e_\alpha-f_\alpha,i(e_\beta+f_\beta)]$, $[i(e_\alpha+f_\alpha),i(e_\beta+f_\beta)]$ are real combinations of the generators $e_\gamma-f_\gamma$ and $i(e_\gamma+f_\gamma)$; hence $\mathfrak k_0$ is closed under brackets. [L1, L2, step 1.1, algebra]

3.1 The complex span of $\mathfrak k_0$ is $\mathfrak g$: as above $e_\alpha,f_\alpha\in\mathbb C\mathfrak k_0$ and the $H_\alpha$ span $\mathfrak h$ over $\mathbb C$ by [L1]. Hence $\mathfrak k_0$ is a real form of $\mathfrak g$. [L1, step 2.2, algebra]

4.1 The form is negative definite on $\mathfrak k_0$. On the Cartan part $B(iH_\alpha,iH_\beta)=-B(H_\alpha,H_\beta)$, so the restriction to $i\mathfrak h_{\mathbb R}$, $\mathfrak h_{\mathbb R}=\sum_\alpha\mathbb RH_\alpha$, is minus $B|_{\mathfrak h_{\mathbb R}}$, which is negative definite by step 2.1. On each root direction, using step 1.1 and the weight decomposition, $B(e_\alpha,e_\alpha)=0=B(f_\alpha,f_\alpha)$ because the two weight components do not pair, hence $B(e_\alpha-f_\alpha,e_\alpha-f_\alpha)=-2B(e_\alpha,f_\alpha)<0$ and $B(i(e_\alpha+f_\alpha),i(e_\alpha+f_\alpha))=-2B(e_\alpha,f_\alpha)<0$; also the mixed term $B(e_\alpha-f_\alpha,i(e_\alpha+f_\alpha))=i[B(e_\alpha,f_\alpha)-B(f_\alpha,e_\alpha)]=0$. For $X=a(e_\alpha-f_\alpha)+bi(e_\alpha+f_\alpha)$ with real $(a,b)\ne(0,0)$ this gives $B(X,X)=-2B(e_\alpha,f_\alpha)(a^2+b^2)<0$. Generators of distinct weights pair to zero, so the planes $W_\alpha=\mathbb R(e_\alpha-f_\alpha)\oplus\mathbb Ri(e_\alpha+f_\alpha)$ are pairwise orthogonal and orthogonal to $i\mathfrak h_{\mathbb R}$; the sum $\mathfrak k_0=i\mathfrak h_{\mathbb R}\oplus\bigoplus_\alpha W_\alpha$ is direct, and $B|_{\mathfrak k_0}$ is negative definite. [L1, step 1.1, step 2.1, step 3.1, algebra]

5.1 By steps 3.1 and 4.1, $\mathfrak k_0$ is a real form of $\mathfrak g$ whose Killing form is negative definite, that is, a compact real form in the sense of [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]. The theorem follows. [step 3.1, step 4.1, A1] ∎

1 checked, 1 failing
