---
id: thm-existence-of-a-compact-real-form
kind: theorem
title: Existence of a compact real form
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-real-form-of-a-complex-semisimple-lie-algebra, lem-chevalley-basis-and-real-structure-constants, thm-serre-presentation-theorem, thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional, cor-opposite-root-spaces-pair-nondegenerately, def-axiom-of-choice, thm-root-sl-two-triple, thm-cartans-semisimplicity-criterion, def-killing-form-of-a-finite-dimensional-lie-algebra]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, Lemma 6.4 and Theorem 6.6, printed pp. 350-353, and the construction (6.12) in the proof of Theorem 6.11, printed pp. 353-354"
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

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Cartan and root data of [L1] and through the normalization statement [L3], whose statements carry the assumption.

[L1] A Cartan subalgebra $\mathfrak h$ exists; with such a choice, the root system $\Phi$ is finite, $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$ with one-dimensional root spaces, and for every root $\alpha$ there are $e_\alpha\in\mathfrak g_\alpha$, $f_\alpha\in\mathfrak g_{-\alpha}$ and $H_\alpha\in\mathfrak h$ with $[e_\alpha,f_\alpha]=H_\alpha$, $\alpha(H_\alpha)=2$, $[H_\alpha,e_\alpha]=2e_\alpha$, $[H_\alpha,f_\alpha]=-2f_\alpha$ and $\beta(H_\alpha)\in\mathbb Z$ for every root $\beta$; also $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ and the Cartan integers are rational ([[thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras]], [[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]], [[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]], [[thm-root-sl-two-triple]], [[thm-serre-presentation-theorem]]).

[L2] $B$ is symmetric, invariant and nondegenerate, the center of $\mathfrak g$ is zero, the pairing $\mathfrak g_\alpha\times\mathfrak g_{-\alpha}$ induced by $B$ is nondegenerate, and in the triple above the trace formula gives $B(H_\alpha,H_\alpha)=2B(e_\alpha,f_\alpha)$ ([[thm-cartans-semisimplicity-criterion]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[cor-opposite-root-spaces-pair-nondegenerately]]).

[L3] The root-vector basis of [L1] can be rescaled so that, in the notation of [L1], $[e_\alpha,f_\alpha]=H_\alpha$ for every root $\alpha$ and the structure constants $N_{\alpha\beta}$, defined by $[e_\alpha,e_\beta]=N_{\alpha\beta}e_{\alpha+\beta}$ when $\alpha+\beta\in\Phi$ and $N_{\alpha\beta}:=0$ when $\alpha+\beta\notin\Phi\cup\{0\}$, are integers satisfying $N_{\alpha\beta}=-N_{-\alpha,-\beta}$ for all $\alpha,\beta\in\Phi$ with $\alpha+\beta\ne0$; in this normalization the coroots $H_{\alpha_1},\dots,H_{\alpha_r}$ attached to any base $\Delta=\{\alpha_1,\dots,\alpha_r\}$ form a basis of $\mathfrak h$ ([[lem-chevalley-basis-and-real-structure-constants]]).

**Proof technique:** direct.

1.1 Fix the data of [L1]. For every root $\alpha$, invariance of $B$ and $[e_\alpha,f_\alpha]=H_\alpha$ give $B(H_\alpha,H_\alpha)=B([e_\alpha,f_\alpha],H_\alpha)=B(e_\alpha,[f_\alpha,H_\alpha])=2B(e_\alpha,f_\alpha)$, so $B(e_\alpha,f_\alpha)=\tfrac12B(H_\alpha,H_\alpha)$. The trace formula computes $B$ on $\mathfrak h$: in a basis consisting of a basis $H_1,\dots,H_r$ of $\mathfrak h$ together with one nonzero vector $e_\gamma\in\mathfrak g_\gamma$ for each root $\gamma$, the operator $\operatorname{ad}_H$ has eigenvalues $0$ on $\mathfrak h$ and $\gamma(H)$ on the one-dimensional space $\mathfrak g_\gamma$, so the trace of $\operatorname{ad}_H\operatorname{ad}_{H'}$ is $$\sum_{\gamma\in\Phi}\gamma(H)\gamma(H')$$ and $B(H,H')$ equals that sum for $H,H'\in\mathfrak h$. For $H=\sum_\alpha t_\alpha H_\alpha$ with real $t_\alpha$ every $\gamma(H)\in\mathbb R$ by the integrality $\gamma(H_\alpha)\in\mathbb Z$ recorded in [L1], and the two terms $\gamma=\pm\alpha$ give $B(H_\alpha,H_\alpha)=\sum_{\gamma\in\Phi}\gamma(H_\alpha)^2\ge 8>0$. Hence $$B(e_\alpha,f_\alpha)=\tfrac12B(H_\alpha,H_\alpha)>0\qquad\text{for every root }\alpha;$$ no rescaling is needed for this, and the inverse rescaling $(\lambda_\alpha e_\alpha,\lambda_\alpha^{-1}f_\alpha)$, $\lambda_\alpha>0$, preserves $[e_\alpha,f_\alpha]$ and leaves $B(e_\alpha,f_\alpha)$ unchanged. [A1, L1, L2, algebra]

2.1 By the trace formula of step 1.1, $B(H,H')=\sum_{\gamma\in\Phi}\gamma(H)\gamma(H')$ for $H,H'\in\mathfrak h$. For $H=\sum_\alpha t_\alpha H_\alpha$ with real $t_\alpha$ all values $\gamma(H)$ are real by [L1]; if $H\ne0$ then $\gamma(H)\ne0$ for some root $\gamma$, because an element of $\mathfrak h$ commuting with every root vector commutes with all of $\mathfrak g$ and so lies in the zero center recorded in [L2]. Hence $B(H,H)=\sum_\gamma\gamma(H)^2>0$ for $H\ne0$, that is, the restriction of $B$ to $\mathfrak h_{\mathbb R}:=\sum_\alpha\mathbb RH_\alpha$ is positive definite. [L1, L2, step 1.1, algebra]

2.2 (Normalized basis and closure of $\mathfrak k_0$) Choose the root vectors as in [L3], so that $[e_\alpha,f_\alpha]=H_\alpha$, the structure constants $N_{\alpha\beta}$ are real and $N_{\alpha\beta}=-N_{-\alpha,-\beta}$ whenever $\alpha+\beta\ne0$; write $f_\gamma=e_{-\gamma}$ and abbreviate $A_\alpha:=e_\alpha-f_\alpha$, $B_\alpha:=i(e_\alpha+f_\alpha)$, $T_\alpha:=iH_\alpha$. Define $$\mathfrak k_0:=\operatorname{span}_{\mathbb R}\Bigl(\{T_\alpha:\alpha\in\Phi\}\cup\{A_\alpha:\alpha\in\Phi\}\cup\{B_\alpha:\alpha\in\Phi\}\Bigr).$$ Since these vectors span $\mathfrak k_0$ and the bracket is bilinear, it suffices to show that the bracket of any two of them again lies in $\mathfrak k_0$. For the Cartan brackets $[T_\alpha,T_\beta]=0$, while $[H_\alpha,e_\beta-f_\beta]=\beta(H_\alpha)(e_\beta+f_\beta)$ and $[H_\alpha,e_\beta+f_\beta]=\beta(H_\alpha)(e_\beta-f_\beta)$ give $$[T_\alpha,A_\beta]=\beta(H_\alpha)B_\beta\in\mathfrak k_0,\qquad [T_\alpha,B_\beta]=-\beta(H_\alpha)A_\beta\in\mathfrak k_0,$$ with real coefficients because $\beta(H_\alpha)\in\mathbb Z\subseteq\mathbb R$ by [L1]. For the root-root brackets let $\alpha\ne\pm\beta$. Expanding and using $N_{-\alpha,\beta}=-N_{\alpha,-\beta}$ (the relation of [L3] with $(\alpha,\beta)$ replaced by $(-\alpha,\beta)$, legitimate here because $\beta\ne\alpha$) together with $N_{-\alpha,-\beta}=-N_{\alpha\beta}$ gives $$[A_\alpha,A_\beta]=N_{\alpha\beta}A_{\alpha+\beta}-N_{\alpha,-\beta}A_{\alpha-\beta},\qquad [A_\alpha,B_\beta]=N_{\alpha\beta}B_{\alpha+\beta}+N_{\alpha,-\beta}B_{\alpha-\beta},$$ $$[B_\alpha,B_\beta]=-N_{\alpha\beta}A_{\alpha+\beta}-N_{\alpha,-\beta}A_{\alpha-\beta},$$ where a term with vanishing structure constant is absent; all three are real linear combinations of generators. If $\beta=\pm\alpha$ then $A_{-\alpha}=-A_\alpha$ and $B_{-\alpha}=B_\alpha$ give $[A_\alpha,A_{-\alpha}]=0=[B_\alpha,B_{-\alpha}]$. Finally $[A_\alpha,B_\alpha]=[e_\alpha-f_\alpha,\,i(e_\alpha+f_\alpha)]=i\bigl([e_\alpha,f_\alpha]-[f_\alpha,e_\alpha]\bigr)=2iH_\alpha=2T_\alpha$, and $B_{-\alpha}=B_\alpha$ makes this also the case $\beta=-\alpha$. Hence all brackets of generators lie in $\mathfrak k_0$, so $\mathfrak k_0$ is a real Lie subalgebra of $\mathfrak g$. [A1, L1, L3, step 1.1, algebra]

3.1 The complex span of $\mathfrak k_0$ is $\mathfrak g$: from $A_\alpha-iB_\alpha=2e_\alpha$ and $A_\alpha+iB_\alpha=-2f_\alpha$ one has $e_\alpha,f_\alpha\in\mathbb C\mathfrak k_0$ for every root, and the $H_\alpha=-iT_\alpha$ span $\mathfrak h$ over $\mathbb C$ by [L3]. Hence $\mathfrak k_0$ is a real form of $\mathfrak g$. [L1, L3, step 2.2, algebra]

4.1 The form is negative definite on $\mathfrak k_0$. On the Cartan part $B(T_\alpha,T_\beta)=-B(H_\alpha,H_\beta)$, so the restriction to $i\mathfrak h_{\mathbb R}$, $\mathfrak h_{\mathbb R}=\sum_\alpha\mathbb RH_\alpha$, is minus $B|_{\mathfrak h_{\mathbb R}}$, which is negative definite by step 2.1. On each root direction, using step 1.1 and the weight decomposition, $B(e_\alpha,e_\alpha)=0=B(f_\alpha,f_\alpha)$ because the two weight components do not pair, hence $B(A_\alpha,A_\alpha)=-2B(e_\alpha,f_\alpha)<0$ and $B(B_\alpha,B_\alpha)=-2B(e_\alpha,f_\alpha)<0$; also the mixed term $B(A_\alpha,B_\alpha)=i[B(e_\alpha,e_\alpha)-B(f_\alpha,f_\alpha)]=0$. For $X=aA_\alpha+bB_\alpha$ with real $(a,b)\ne(0,0)$ this gives $B(X,X)=-2B(e_\alpha,f_\alpha)(a^2+b^2)<0$. Generators of distinct weights pair to zero, so the planes $W_\alpha=\mathbb RA_\alpha\oplus\mathbb RB_\alpha$ are pairwise orthogonal and orthogonal to $i\mathfrak h_{\mathbb R}$; for a set $\Phi^+$ of representatives of the pairs $\{\alpha,-\alpha\}$ the sum $\mathfrak k_0=i\mathfrak h_{\mathbb R}\oplus\bigoplus_{\alpha\in\Phi^+}W_\alpha$ is direct, and $B|_{\mathfrak k_0}$ is negative definite. [L1, step 1.1, step 2.1, step 3.1, algebra]

5.1 By steps 3.1 and 4.1, $\mathfrak k_0$ is a real form of $\mathfrak g$ whose Killing form is negative definite, that is, a compact real form in the sense of [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]. The theorem follows. [step 3.1, step 4.1, A1] ∎

## Remarks

The closure computation of step 2.2 rests on the normalized root-vector basis supplied by [[lem-chevalley-basis-and-real-structure-constants]], which proves Knapp's Theorem 6.6 together with Lemma 6.4 (printed pp. 350--353) and the equivalent Chevalley presentation of Etingof \S 39.4: after a rescaling of the root vectors one has $[e_\alpha,e_{-\alpha}]=H_\alpha$ and structure constants that are integers satisfying $N_{\alpha\beta}=-N_{-\alpha,-\beta}$. The rescaling is genuine and its reality statement cannot be dispensed with: the normalization $[e_\gamma,f_\gamma]=H_\gamma$ is preserved by every further rescaling $e_\gamma\mapsto a_\gamma e_\gamma$, $f_\gamma\mapsto a_\gamma^{-1}f_\gamma$, while such a rescaling changes $N_{\alpha\beta}$ into $a_\alpha a_\beta a_{\alpha+\beta}^{-1}N_{\alpha\beta}$ and can destroy the reality of the structure constants; thus the reality of the $N_{\alpha\beta}$ is not a consequence of the sl_2-triple normalization and is imported from [[lem-chevalley-basis-and-real-structure-constants]]. Two further points of the earlier draft were corrected during this run and are used above: the value $B(e_\alpha,f_\alpha)=\tfrac12B(H_\alpha,H_\alpha)>0$ is *not* produced by a rescaling --- it holds in every normalization, by invariance of $B$ and the trace formula --- and it is preserved by the rescaling $(e_\alpha,f_\alpha)\mapsto(\lambda_\alpha e_\alpha,\lambda_\alpha^{-1}f_\alpha)$; and the direct sum in step 4.1 runs over a set of representatives $\Phi^+$ of the pairs $\{\alpha,-\alpha\}$, since $W_{-\alpha}=W_\alpha$.
