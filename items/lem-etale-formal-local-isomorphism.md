---
id: lem-etale-formal-local-isomorphism
kind: lemma
title: Étale maps induce completion isomorphisms at equal-residue points
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- def-adic-completion-of-a-module
- def-embedding-dimension-and-regular-local-ring
- def-etale-morphism-schemes
- def-flat-morphism-schemes
- def-local-ring
- def-locally-noetherian-and-noetherian-scheme
- def-relative-dimension-smooth-morphism
- def-smooth-morphism-schemes
- lem-scheme-fibre-stalk-quotient
- thm-completion-of-a-noetherian-local-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)
    url: https://arxiv.org/pdf/math/0401401
---

## Statement

Let $\varphi\colon X'\to X$ be a morphism of locally Noetherian schemes that is étale at $x'\in X'$ ([[def-etale-morphism-schemes]]), with $x=\varphi(x')$, and let $\mathfrak m_x\subset\mathcal O_{X,x}$ and $\mathfrak m_{x'}\subset\mathcal O_{X',x'}$ be the maximal ideals ([[def-local-ring]]). Then:

(1) $\varphi$ is flat at $x'$ ([[def-smooth-morphism-schemes]]);

(2) $\mathfrak m_x\mathcal O_{X',x'}=\mathfrak m_{x'}$;

(3) for every ideal $I\subseteq\mathcal O_{X,x}$ and every $n\ge0$,
$$I\subseteq\mathfrak m_x^{\,n}\iff I\mathcal O_{X',x'}\subseteq\mathfrak m_{x'}^{\,n}.$$

If the induced residue-field map $\kappa(x)\to\kappa(x')$ is an isomorphism, then the induced map of maximal-adic completions
$$\widehat{\mathcal O}_{X,x}\longrightarrow\widehat{\mathcal O}_{X',x'}$$
is an isomorphism. This completion conclusion requires the residue-field hypothesis.

## Facts & Assumptions

**Given:** A morphism $\varphi\colon X'\to X$ of locally Noetherian schemes, étale at $x'\in X'$ with $x=\varphi(x')$, and the maximal ideals $\mathfrak m_x\subseteq\mathcal O_{X,x}$ and $\mathfrak m_{x'}\subseteq\mathcal O_{X',x'}$.

[F1] [[def-etale-morphism-schemes]], [[def-smooth-morphism-schemes]], [[def-relative-dimension-smooth-morphism]], [[def-flat-morphism-schemes]]: étaleness at $x'$ makes $\varphi$ smooth and of relative dimension $0$, hence flat, and its geometric fibre has local dimension zero.

[F2] [[lem-scheme-fibre-stalk-quotient]], [[def-embedding-dimension-and-regular-local-ring]], [[def-locally-noetherian-and-noetherian-scheme]]: the local ring of the fibre is $\mathcal O_{X',x'}/\mathfrak m_x\mathcal O_{X',x'}$; it is a zero-dimensional regular Noetherian local ring and therefore a field. Indeed its maximal ideal $\mathfrak n$ has $\mathfrak n/\mathfrak n^2=0$; local Noetherianity makes $\mathfrak n$ finitely generated, and the relation $\mathfrak n=\mathfrak n^2$ gives a matrix $M$ with entries in $\mathfrak n$ such that $I-M$ annihilates the generators. Since $\det(I-M)$ is a unit, those generators vanish.

[F3] [[def-local-ring]]: a local ring has exactly one maximal ideal.

[F4] [[def-adic-completion-of-a-module]], [[thm-completion-of-a-noetherian-local-ring]]: the maximal-adic completion of a Noetherian local ring is the inverse limit of its quotients by powers of its maximal ideal.

## Proof

1.1 Flatness and the fibre local ring. By [F1], $\varphi$ is flat at $x'$. Put $s=\varphi(x')$. The local ring of the fibre at $x'$ is $\mathcal O_{X',x'}/\mathfrak m_s\mathcal O_{X',x'}$ by [F2]; it is regular because the geometric fibre is regular and has dimension zero by [F1], so it is a field by [F2]. Therefore $\mathfrak m_x\mathcal O_{X',x'}=\mathfrak m_s\mathcal O_{X',x'}$ is a maximal ideal of $\mathcal O_{X',x'}$, hence equals its unique maximal ideal $\mathfrak m_{x'}$ by [F3]. This proves (1) and (2). [F1, F2, F3]

2.1 Forward filtration detection. If $I\subseteq\mathfrak m_x^{\,n}$, extension of ideals and step 1.1 give $$I\mathcal O_{X',x'}\subseteq\mathfrak m_x^{\,n}\mathcal O_{X',x'}=(\mathfrak m_x\mathcal O_{X',x'})^n=\mathfrak m_{x'}^{\,n}.$$ Thus the forward implication in (3) holds. [step 1.1]

2.2 Reverse filtration detection. Put $A=\mathcal O_{X,x}$, $B=\mathcal O_{X',x'}$, $\mathfrak m=\mathfrak m_x$, and $\mathfrak n=\mathfrak m_{x'}$. Assume $IB\subseteq\mathfrak n^N$. If some $a\in I$ were not in $\mathfrak m^N$, choose the largest $k<N$ with $a\in\mathfrak m^k$. Its class in the finite-dimensional $\kappa(x)$-vector space $\mathfrak m^k/\mathfrak m^{k+1}$ is nonzero. Flatness in step 1.1 identifies $(\mathfrak m^k/\mathfrak m^{k+1})\otimes_{\kappa(x)}\kappa(x')$ with $\mathfrak n^k/\mathfrak n^{k+1}$; extension of scalars along a field extension is injective on a finite-dimensional vector space, so the class of $a$ remains nonzero there. But $a\in IB\subseteq\mathfrak n^N\subseteq\mathfrak n^{k+1}$, a contradiction. Thus every $a\in I$ lies in $\mathfrak m^N$, proving the reverse implication in (3). [step 1.1]

3.1 Completion when residue fields agree. Assume $\kappa(x)\to\kappa(x')$ is an isomorphism. By step 1.1, $\mathfrak m_x\mathcal O_{X',x'}=\mathfrak m_{x'}$, so the induced map on residue fields and the degree-zero associated graded pieces is an isomorphism. For every $k\ge0$, flatness from [F1] identifies $$\mathfrak m_x^k/\mathfrak m_x^{k+1}\otimes_{\kappa(x)}\kappa(x')\cong\mathfrak m_{x'}^k/\mathfrak m_{x'}^{k+1};$$ since the residue fields agree, the map of associated graded pieces is an isomorphism in every degree. The exact sequences $$0\to\mathfrak m_x^{q-1}/\mathfrak m_x^q\to\mathcal O_{X,x}/\mathfrak m_x^q\to\mathcal O_{X,x}/\mathfrak m_x^{q-1}\to0$$ and their analogues for $\mathcal O_{X',x'}$ show by induction on $q$ that the induced map on each finite quotient by the $q$th power is an isomorphism. Taking inverse limits using [F4] proves the asserted isomorphism of completions. [F1, F4, step 1.1] ∎

## Remarks

- The residue-field condition in the completion clause cannot be omitted. For a nontrivial finite separable extension $L/K$, the morphism $\operatorname{Spec}L\to\operatorname{Spec}K$ is étale ([[ex-finite-etale-separable-extension]]), while the completed local rings are $L$ and $K$, and the induced completion map is the proper inclusion $K\hookrightarrow L$, hence is not an isomorphism. No assertion about abstract isomorphism of the two fields is needed. Włodarczyk's phrase “formal analytic isomorphism” in the proof of Lemma 2.4.1 is valid in its algebraically closed closed-point setting; the order argument for arbitrary étale points needs only (1)–(3).
- Flatness and the associated-graded argument prove the filtration and equal-residue completion claims without a choice principle.
