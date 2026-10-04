---
id: cor-bgg-resolution-has-length-the-number-of-positive-roots
kind: corollary
title: The BGG resolution has length the number of positive roots
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-bgg-resolution-of-a-finite-dimensional-simple-module, cor-bgg-euler-character-identity, lem-finite-weyl-strong-exchange-and-deletion, lem-finite-weyl-closed-chambers-and-stabilizers, def-bgg-bruhat-verma-sum-in-degree-k, def-axiom-of-choice, def-verma-module, thm-pbw-model-of-a-verma-module, lem-finite-weyl-positive-roots-and-simple-reflections]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 3.2, p. 11 ($\\ell(w_0)=|\\Phi^+|=\\dim\\mathfrak n^-$)"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "N. Hemelsoet and R. Voorhaar, A computer algorithm for the BGG resolution, arXiv:1911.00871, Sec. 2.1, p. 3"
      url: "https://arxiv.org/pdf/1911.00871"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in\Lambda^+$ and let $w_0\in W$ be the longest element. Then $\ell(w_0)=|\Phi^+|$ and $|\{w\in W:\ell(w)=|\Phi^+|\}|=1$, the BGG complex $C_\bullet(\lambda)$ is concentrated in degrees $0\le k\le|\Phi^+|$, the top term is $C_{|\Phi^+|}(\lambda)=M(w_0\circ\lambda)\ne0$, and all higher terms vanish. Consequently the resolution has length $|\Phi^+|$ and the last nonzero degree of the complex is $|\Phi^+|$; in particular the alternating sum of [[cor-bgg-euler-character-identity]] is finite and has $|W|$ terms.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\lambda\in\Lambda^+$, the longest element $w_0\in W$, and the BGG complex $C_\bullet(\lambda)$.

[F1] $w_0\Phi^+=\Phi^-$, $w_0$ is the unique longest element, and $\ell(w)=|\operatorname{Inv}(w)|$ for every $w$, where $\operatorname{Inv}(w)=\{\alpha\in\Phi^+:w\alpha\in\Phi^-\}$; hence $\ell(w_0)=|\Phi^+|$ and $\ell(w)\le|\Phi^+|$ for every $w$, with equality only for $w=w_0$ ([[lem-finite-weyl-closed-chambers-and-stabilizers]], [[lem-finite-weyl-strong-exchange-and-deletion]], [[lem-finite-weyl-positive-roots-and-simple-reflections]]).

[F2] $C_k(\lambda)=\bigoplus_{\ell(w)=k}M(w\circ\lambda)$ for $0\le k\le|\Phi^+|$ and $C_k(\lambda)=0$ for $k>|\Phi^+|$; the summands are indexed by the elements of $W$ of length $k$, and $C_{|\Phi^+|}(\lambda)=M(w_0\circ\lambda)$ because $w_0$ is the unique element of maximal length ([[def-bgg-bruhat-verma-sum-in-degree-k]], [[def-verma-module]]).

[F3] $M(\psi)\ne0$ for every weight $\psi$: $M(\psi)$ has a nonzero highest weight vector $v_\psi$ and $u\mapsto uv_\psi$ is a vector-space isomorphism $U(\mathfrak n^-)\xrightarrow{\sim}M(\psi)$ ([[def-verma-module]], [[thm-pbw-model-of-a-verma-module]]).

[F4] $0\to C_{|\Phi^+|}(\lambda)\to\cdots\to C_1(\lambda)\to C_0(\lambda)\to L(\lambda)\to0$ is exact; equivalently the unaugmented complex $C_\bullet(\lambda)$ has homology $L(\lambda)$ in degree $0$ and no homology in positive degrees ([[thm-bgg-resolution-of-a-finite-dimensional-simple-module]]).

[F5] The Euler-character identity expresses $[L(\lambda)]$ as the finite alternating sum $\sum_{w\in W}(-1)^{\ell(w)}[M(w\circ\lambda)]$, whose terms are indexed by the elements of $W$ ([[cor-bgg-euler-character-identity]]).

## Proof

1.1 Since $w_0\Phi^+=\Phi^-$, one has $\operatorname{Inv}(w_0)=\{\alpha\in\Phi^+:w_0\alpha\in\Phi^-\}=\Phi^+$, so $\ell(w_0)=|\operatorname{Inv}(w_0)|=|\Phi^+|$ by [F1]. If $\ell(w)=|\Phi^+|$ for some $w$, then $\operatorname{Inv}(w)$ is a subset of $\Phi^+$ of full cardinality, hence equals $\Phi^+$, so $w$ sends every positive root to a negative root, $w\Phi^+=\Phi^-$, and by uniqueness of $w_0$ in [F1] we get $w=w_0$. Therefore $|\{w\in W:\ell(w)=|\Phi^+|\}|=1$ and $\ell(w_0)=|\Phi^+|$ and $|\{w\in W:\ell(w)=|\Phi^+|\}|=1$. [F1]

1.2 By [F2] the complex is concentrated in degrees $0,\dots,|\Phi^+|$ with $C_k(\lambda)=0$ for $k>|\Phi^+|$, and the top term is $C_{|\Phi^+|}(\lambda)=M(w_0\circ\lambda)$; this is nonzero by [F3]. Hence the last nonzero degree of the complex is $|\Phi^+|$ and the resolution of [F4] has length $|\Phi^+|$. [F2, F3]

1.3 The alternating sum of [F5] is $\sum_{w\in W}(-1)^{\ell(w)}[M(w\circ\lambda)]$: it is finite, and its terms are indexed by the $|W|$ elements of the Weyl group, so it has exactly $|W|$ terms. [F5]

2.1 Combining: $\ell(w_0)=|\Phi^+|$ and $|\{w:\ell(w)=|\Phi^+|\}|=1$ by step 1.1; the complex is concentrated in degrees $0\le k\le|\Phi^+|$ with top term $M(w_0\circ\lambda)\ne0$ and all higher terms zero by step 1.2; the resolution has length $|\Phi^+|$, its highest nonzero degree is $|\Phi^+|$ (homology is concentrated in degree $0$ by [F4]), and the alternating sum has $|W|$ terms by step 1.3. [F4, step 1.1, step 1.2, step 1.3] ∎
