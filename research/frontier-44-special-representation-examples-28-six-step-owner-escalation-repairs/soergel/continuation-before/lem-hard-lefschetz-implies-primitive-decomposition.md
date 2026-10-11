---
id: lem-hard-lefschetz-implies-primitive-decomposition
kind: lemma
title: "Hard Lefschetz gives the primitive decomposition, orthogonality and the signature formula"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, thm-symmetric-bilinear-forms-have-an-orthogonal-basis, thm-sylvesters-law-of-inertia, def-definiteness-inertia-and-signature-data-over-the-reals, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, thm-rank-nullity]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 2, paragraphs before Lemma 2.1 and Lemma 2.2, including the displayed primitive decomposition, orthogonality, and the signature formula"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.2, the donnees and the lemmas Lemme 2.1 and Lemme 2.2"
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** A finite-dimensional graded real space $H$ concentrated in one parity, with a graded non-degenerate symmetric form $\langle-,-\rangle$ and a symmetric degree-two operator $L$, its primitive subspaces $P_L^{-i}$, Lefschetz forms $(a,b)_L^{-i}=\langle a,L^ib\rangle$, the hypotheses hL and HR with the standard sign and lowest degree $-d$, as in [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]].

[F1] The form is graded and non-degenerate, so the pairing of homogeneous pieces $H^m\times H^{-m}\to\mathbb R$ is perfect and $\dim H^m=\dim H^{-m}$; $L$ is symmetric and of degree two; hL means that $L^i:H^{-i}\to H^i$ is an isomorphism for every $i\ge0$, and $P_L^{-i}=\ker(L^{i+1}|_{H^{-i}})$ ([[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]).

[F2] A symmetric bilinear form on a finite-dimensional space has an orthogonal basis, and its inertia $(p,q,r)$ and signature $p-q$ are independent of the diagonalizing basis; a form is non-degenerate exactly when its radical is zero ([[thm-symmetric-bilinear-forms-have-an-orthogonal-basis]], [[thm-sylvesters-law-of-inertia]], [[def-definiteness-inertia-and-signature-data-over-the-reals]], [[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[F3] Rank-nullity holds for linear maps of finite-dimensional spaces ([[thm-rank-nullity]]).

[F4] Symmetry of $L$ means $\langle La,b\rangle=\langle a,Lb\rangle$ for all $a,b$; hence $\langle L^ka,b\rangle=\langle a,L^kb\rangle$ for all $k\ge0$ ([[def-bilinear-symmetric-skew-and-alternating-forms]], [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]).

## Statement

Let $H$ have a graded non-degenerate symmetric form and a symmetric degree-two operator $L$.

(a) If hL holds then $H=\bigoplus_{i\ge0}\bigoplus_{j=0}^{i}L^jP_L^{-i}$; more precisely, in each degree $-i$ one has $H^{-i}=\bigoplus_{k\ge0}L^kP_L^{-(i+2k)}$.

(b) In each degree $-i$, the decomposition of (a) is orthogonal for the Lefschetz form $\langle a,L^ib\rangle$.

(c) All Lefschetz forms on $H^{-i}$ are non-degenerate exactly when hL holds.

(d) If $H$ has one parity and lowest degree $-d$, standard HR is equivalent to hL together with the signature formula $\operatorname{sig}\bigl(\langle-,L^i-\rangle|_{H^{-i}}\bigr)=\sum_{k\ge0}(-1)^{(d-i-2k)/2}\dim P_L^{-(i+2k)}$ for every $i\ge0$ (zero spaces omitted).

(e) If $H$ satisfies hL, an $L$-stable graded subspace $V\subseteq H$ with $\dim V^{-i}=\dim V^i$ for all $i$ inherits hL; if $H$ satisfies HR then the restricted form on $V$ is non-degenerate and $V$ inherits the ambient primitive signs, and its standard global sign agrees with that of $H$ when their lowest degrees coincide.

## Proof

**Proof technique:** direct; primitive-string decomposition and orthogonal signature bookkeeping.

1.1 **One step of the decomposition.** Under hL the map $L^{i+2}:H^{-i-2}\to H^{i+2}$ is an isomorphism, so for every $a\in H^{-i}$ there is $b\in H^{-i-2}$ with $L^{i+1}a=L^{i+2}b$; then $a-Lb\in P_L^{-i}$, and hence $H^{-i}=P_L^{-i}+L\,H^{-i-2}$. The sum is direct: if $Lb\in P_L^{-i}$, then $0=L^{i+1}(Lb)=L^{i+2}b$ and injectivity of $L^{i+2}$ gives $b=0$; hence $H^{-i}=P_L^{-i}\oplus L\,H^{-i-2}$. [given, F1, algebra]

2.1 **Iteration and the primitive decomposition (a).** Iterating step 1.1 gives $H^{-i}=P_L^{-i}\oplus L\,P_L^{-i-2}\oplus L^2P_L^{-i-4}\oplus\cdots=\bigoplus_{k\ge0}L^kP_L^{-(i+2k)}$, the sum terminating because $H^{-m}=0$ for $m>d$; For positive degree $i$, hL gives $H^i=L^iH^{-i}$, so applying $L^i$ to the negative-degree decomposition supplies all positive pieces. Reindexing by the lowest primitive degree gives $H=\bigoplus_{i\ge0}\bigoplus_{j=0}^{i}L^jP_L^{-i}$, since every string $L^kP_L^{-i}$ lies in degrees between $-i$ and $i$, so $k\le i$ for nonzero contributions. This proves (a). [step 1.1, F1]

3.1 **Orthogonality (b).** Let $p\in P_L^{-(i+2k)}$ and $q\in P_L^{-(i+2l)}$ with $k<l$ and consider $a=L^kp$, $b=L^lq$ in $H^{-i}$. Using symmetry of $L$ repeatedly, $(a,b)_L^{-i}=\langle L^kp,L^{i+l}q\rangle=\langle p,L^{i+k+l}q\rangle$, and the exponent satisfies $i+k+l\ge i+2k+1$; since $L^{i+2k+1}p=0$, the pairing vanishes. Hence distinct strings are orthogonal for the Lefschetz form, as claimed. [step 2.1, F1, F4, algebra]

4.1 **Non-degeneracy of the Lefschetz forms is equivalent to hL (c).** For fixed $i$, the Lefschetz form at degree $-i$ is the composite of the linear map $L^i:H^{-i}\to H^i$ with the perfect pairing $H^i\times H^{-i}\to\mathbb R$ given by the form; the latter is an isomorphism $H^i\to(H^{-i})^*$ by non-degeneracy of $\langle-,-\rangle$ [F1]. Hence the Lefschetz form is non-degenerate if and only if $L^i$ is an isomorphism; this holds simultaneously for all $i\ge0$ exactly when hL holds, and for $i>d$ both sides are zero by [F1] ($\dim H^i=\dim H^{-i}=0$). This proves (c). [step 3.1, F1, F3]

5.1 **Signature formula (d).** Assume hL and the standard-sign definiteness on primitives. The orthogonal decomposition of step 3.1 expresses the form on $H^{-i}$ as an orthogonal sum of the forms $(p,q)\mapsto\langle p,L^{i+2k}q\rangle$ on the primitive spaces $P_L^{-(i+2k)}$; each of these is definite of sign $(-1)^{(d-i-2k)/2}$ by HR, and its own inertia is therefore $(\dim P,0,0)$ or $(0,\dim P,0)$ according to that sign. Sylvester's law [F2] makes the signature of the orthogonal sum the sum of the summand signatures, giving the displayed formula. Conversely, assume hL and the signature formula for all $i$; descending from the bottom degree, the formula determines the signature of the primitive form on $P_L^{-(i+2k)}$ after the signatures of the higher-degree primitive spaces are known, the orthogonal decomposition and step 4.1 make each primitive form non-degenerate, and the subtraction forces its signature to be the prescribed sign times its dimension. Its inertia therefore has only positive or only negative entries by [F2], so each primitive form is definite with the stated sign; this recovers HR. This proves (d). [step 3.1, step 4.1, F2]

6.1 **Stable subspaces (e).** Let $V\subseteq H$ be $L$-stable with $\dim V^{-i}=\dim V^i$. Since $L^i$ is injective on $H$ (hL), its restriction to $V$ is injective, and the dimension symmetry makes it an isomorphism onto $V^i$; hence $V$ satisfies hL for the restricted operator and form. Its primitive spaces are $P_V^{-i}=V^{-i}\cap P_L^{-i}$, because the kernel of $L^{i+1}$ on $V^{-i}$ is the intersection with the kernel on $H^{-i}$; the restricted Lefschetz form on $P_V^{-i}$ is the restriction of the ambient definite primitive form, hence definite with the ambient sign $(-1)^{(d-i)/2}$. The string construction in steps 1.1–2.1 uses only hL, so it applies to $V$ before non-degeneracy of its restricted form is known. This primitive decomposition then shows, exactly as in step 5.1, that the restricted form on $V$ is an orthogonal sum of definite blocks, hence non-degenerate, and that its signs are the ambient signs; if the lowest nonzero degree of $V$ equals $-d$, then the ambient sign formula is also the standard sign of $V$. This proves (e) and completes the lemma. [step 2.1, step 4.1, step 5.1, F1, F2] ∎

## Remarks

- The dimension input $\dim P_L^{-i}=\dim H^{-i}-\dim H^{-i-2}$ follows from step 1.1 and [F3]; it is the string count used implicitly in (a) and (d).
- Part (e) does not assert that an arbitrary $L$-stable subspace with symmetric dimensions is a direct summand of $H$; it uses only the restricted form, which is shown non-degenerate by the orthogonal-string decomposition.
