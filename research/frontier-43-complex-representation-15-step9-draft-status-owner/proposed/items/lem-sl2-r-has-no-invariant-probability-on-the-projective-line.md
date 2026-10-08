---
status: draft
id: lem-sl2-r-has-no-invariant-probability-on-the-projective-line
kind: lemma
title: No invariant projective-line probability for two unipotents with distinct fixed lines
deps:
  - def-real-projective-line-and-its-sl2-action
  - def-borel-sigma-algebra
  - def-measure
  - def-probability-measure
  - def-homeomorphism-and-open-maps
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Choice-free. Only two nonzero vectors are selected to form a basis; the finite choice is provable without an axiom of choice. The measure argument uses countable additivity and an explicit enumeration of integer intervals."
verification:
  precheck: pass
sources:
  references:
    - title: "Emmanuel Breuillard, PCMI Lecture Notes on Property (T), Expander Graphs and Approximate Groups (complete notes with exercise sheets)"
      url: "https://www.math.utah.edu/pcmi12/lecture_notes/breuillard.pdf"
      locator: "Exercises for the PCMI Summer School, §2 III.5, printed p. 4/PDF p. 34: a uniform non-invariance exercise for two elementary matrices, with a note connecting it to invariant measures on the projective line. The exercise is posed but not proved there."
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A, Example A.6.4(ii), printed pp. 327–328: the projective action and the translation/inversion argument against an invariant probability. Its unqualified no-nonzero-Borel-measure wording needs a local-finiteness hypothesis (counting measure is a counterexample). The two-unipotent probability statement below is proved locally."
---

## Statement

Let $P^1(\mathbb R)$ be the real projective line with the natural action of
$\mathrm{SL}_2(\mathbb R)$ ([[def-real-projective-line-and-its-sl2-action]]).
Let $u_1,u_2\in\mathrm{SL}_2(\mathbb R)$ be unipotent matrices, meaning
$u_i\ne I$ and $(u_i-I)^2=0$, whose fixed lines in $\mathbb R^2$ are
distinct. There is no Borel probability measure on $P^1(\mathbb R)$
([[def-borel-sigma-algebra]], [[def-measure]], [[def-probability-measure]])
invariant under both $u_1$ and $u_2$, where invariance means
$\mu(u_i A)=\mu(A)$ for every Borel set $A$. In particular, no Borel
probability measure is invariant under both $u_+=\begin{pmatrix}1&1\\0&1\end{pmatrix}$
and $u_-=\begin{pmatrix}1&0\\1&1\end{pmatrix}$.

## Facts & Assumptions

**Given:** Two nonidentity unipotent matrices $u_1,u_2\in\mathrm{SL}_2(\mathbb R)$ with distinct fixed lines, and a Borel probability measure on $P^1(\mathbb R)$ invariant under their projective actions.

[F1] The natural action is a group action by homeomorphisms, and in the projective coordinate $t=x/y$ the point $[t:1]$ is finite while $[1:0]=\infty$ ([[def-real-projective-line-and-its-sl2-action]], [[def-homeomorphism-and-open-maps]]).

[F2] A Borel probability measure has total mass $1$ and is countably additive on pairwise disjoint Borel sets ([[def-borel-sigma-algebra]], [[def-measure]], [[def-probability-measure]]).

[F3] A homeomorphism and its inverse carry Borel sets to Borel sets; hence pushing a Borel probability forward by a projective action gives a Borel probability ([[def-borel-sigma-algebra]], [[def-homeomorphism-and-open-maps]]).

[F4] The finite chart is an open copy of $\mathbb R$ in the one-point compactification model of $P^1(\mathbb R)$; its half-open bounded intervals are Borel ([[def-real-projective-line-and-its-sl2-action]], [[def-borel-sigma-algebra]]).

## Proof

Breuillard's Exercise §2 III.5 asks for a uniform failure of invariance under two specific elementary matrices and notes the projective-line consequence; it supplies no proof of that exercise. Bekka–de la Harpe–Valette prove the related full-$\mathrm{SL}_2(\mathbb R)$ assertion using all translations and inversion. The argument here proves the stated two-element result directly, including arbitrary distinct fixed lines.

**Proof technique:** conjugate the fixed lines to the coordinate axes, then partition the finite chart into translation intervals.

1.1 Write $N_i=u_i-I$. Choose $w_i$ with $v_i:=N_iw_i\ne0$. Since $N_i^2=0$, $N_iv_i=0$; the vectors $v_i,w_i$ are independent, because applying $N_i$ to a linear relation forces the coefficient of $w_i$ to vanish. They form a basis of $\mathbb R^2$, and $N_i(av_i+bw_i)=bv_i$, so $\operatorname{im}N_i=\ker N_i=\mathbb Rv_i$, the fixed line $L_i$. Distinctness makes $D=\det[v_1\ v_2]\ne0$, so $S=[v_1\ D^{-1}v_2]\in\mathrm{SL}_2(\mathbb R)$. In this basis $S^{-1}N_1S$ kills the first coordinate vector and has image in its span, while $S^{-1}N_2S$ kills the second and has image in its span; both are nonzero. Therefore $S^{-1}u_1S=\begin{pmatrix}1&c\\0&1\end{pmatrix}$ and $S^{-1}u_2S=\begin{pmatrix}1&0\\c'&1\end{pmatrix}$ for some $c,c'\ne0$. [F1, algebra]

2.1 Let $\alpha=(S^{-1})_*\mu$, so $\alpha(A)=\mu(SA)$ for Borel $A$. By [F1, F3], this is a Borel probability measure. If $v_i=S^{-1}u_iS$, then $\alpha(v_iA)=\mu(Sv_iA)=\mu(u_iSA)=\mu(SA)=\alpha(A)$, so $\alpha$ is invariant under both displayed matrices. [F1, F2, F3, step 1.1]

3.1 The first displayed matrix acts on finite $t=x/y$ by $t\mapsto t+c$ and fixes $\infty$. Put $d=|c|>0$ and $\sigma=c/d\in\{-1,1\}$, and for each integer $k$ set $A_k=[kd,(k+1)d)$. These Borel sets partition $\mathbb R$ and translation by $c$ sends $A_k$ to $A_{k+\sigma}$, so invariance gives them all a common mass $a\ge0$. For every $n\ge0$, the $2n+1$ disjoint sets $A_{-n},\ldots,A_n$ have total mass $(2n+1)a\le1$; hence $a=0$. Enumerating the integer indices as $0,1,-1,2,-2,\ldots$ and using [F2] gives $\alpha(\mathbb R)=\alpha(\bigcup_{k\in\mathbb Z}A_k)=0$, so $\alpha(\{\infty\})=1$. [F2, F4, step 2.1, algebra]

4.1 The second displayed matrix sends $[1:0]=\infty$ to $[1:c']$, a finite point because $c'\ne0$. Invariance would give $\alpha(\{[1:c']\})=\alpha(\{\infty\})=1$, contradicting $\alpha(\mathbb R)=0$ from step 3.1. Thus no invariant probability measure under both $u_1,u_2$ exists. [F2, F4, step 2.1, step 3.1]

5.1 The matrices $u_+$ and $u_-$ are nonidentity unipotents; their fixed lines are respectively $\mathbb R(1,0)$ and $\mathbb R(0,1)$, which are distinct. Applying steps 1.1–4.1 proves the particular assertion as well. A single unipotent does preserve the Dirac probability at its fixed line, so requiring two distinct fixed lines is essential. [step 1.1, step 4.1, algebra] ∎
