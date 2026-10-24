---
id: lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules
kind: lemma
title: Surjectivity modulo n-minus for free weight-generated modules (BGG 10.5)
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-bgg-category-o, thm-pbw-model-of-a-verma-module, prop-equivalent-support-description-of-category-o, thm-triangular-decomposition-from-a-chosen-positive-root-system, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-8.md"
      - "research/frontier-38-owner-30-alpha-batch-8-5a.md"
      - "research/frontier-38-owner-30-step5-hash-8-post-5a.json"
    content_sha256: "afd17fe635ce2aaaa11217d1e3c2e3212983bc57bd707da437b88868f8c2977d"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 4.2.1 (BGG Lemma 10.5), pp. 18-20"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
    - title: "J. van Ekeren, Topics in representation theory (IMPA 2024), Sec. 29, p. 122"
      url: "https://w3.impa.br/~jethro/2024-0/georep.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $N\in\mathcal O$. Let $M$ be a $U(\mathfrak n^-)$-module that is free on weight-vector generators $v_1,\dots,v_n$ (every element of $M$ is a finite sum $\sum_i u_iv_i$ with $u_i\in U(\mathfrak n^-)$), and let $\varphi\colon M\to N$ be a $U(\mathfrak n^-)$-module map such that each image $\varphi(v_i)$ is a weight vector of $N$. Then $\varphi$ is surjective if and only if the induced map $\bar\varphi\colon M/\mathfrak n^-M\to N/\mathfrak n^-N$ is surjective.

## Facts & Assumptions

**Given:** The Axiom of Choice, an object $N$ of the classical category $\mathcal O$ of [[def-bgg-category-o]], a $U(\mathfrak n^-)$-module $M$ free on weight-vector generators $v_1,\dots,v_n$, and a $U(\mathfrak n^-)$-linear map $\varphi\colon M\to N$ whose values $\varphi(v_i)$ on the generators are weight vectors of $N$.

[F1] Every object of $\mathcal O$ is $\mathfrak h$-semisimple with finite-dimensional weight spaces, and its weight set is contained in a finite union of cones $\lambda_1-Q^+,\dots,\lambda_r-Q^+$ ([[prop-equivalent-support-description-of-category-o]], [[def-bgg-category-o]]).

[F2] $\mathfrak n^-=\bigoplus_{\alpha\in\Phi^+}\mathbb C f_\alpha$, so $U(\mathfrak n^-)$ is spanned by PBW monomials in the $f_\alpha$, and for a $U(\mathfrak n^-)$-module the coinvariants are $N/\mathfrak n^-N$ ([[thm-triangular-decomposition-from-a-chosen-positive-root-system]], [[thm-pbw-model-of-a-verma-module]]).

[F3] $\mathfrak n^-N=\sum_{\alpha\in\Phi^+}f_\alpha N$, and $\mathfrak n^-N$ is $\mathfrak h$-stable, so $N/\mathfrak n^-N$ is $\mathfrak h$-semisimple with finite-dimensional weight spaces $ (N/\mathfrak n^-N)_\mu=N_\mu/\sum_\alpha f_\alpha N_{\mu+\alpha}$ ([[def-bgg-category-o]]).

## Proof

1.1 If $\varphi$ is surjective, then $\bar\varphi$ is surjective, because $\varphi(\mathfrak n^-M)=\mathfrak n^-\varphi(M)=\mathfrak n^-N$ by $U(\mathfrak n^-)$-linearity, so $\varphi$ induces a surjection of the quotients. [given, algebra]

1.2 Conversely assume $\bar\varphi$ surjective; we prove that every weight vector of $N$ lies in $\operatorname{im}\varphi$ by descending induction on the weight. Since the weight set of $N$ is contained in finitely many cones $\lambda_i-Q^+$, the set of weights $\nu$ of $N$ with $\nu-\mu\in Q^+\setminus\{0\}$ is finite for every weight $\mu$ (only the finitely many cones with $\lambda_i-\mu\in Q^+$ contribute, and there the coefficients of $\nu-\mu$ are bounded by those of $\lambda_i-\mu$). [F1, algebra]

2.1 Inductive step. Fix a weight $\mu$ and $u\in N_\mu$, and assume all weight vectors of $N$ of weight $>_\mu$ lie in $\operatorname{im}\varphi$. Since $\bar\varphi$ is surjective, $\bar u$ is a linear combination of the classes $\overline{\varphi(v_i)}$, and each nonzero $\overline{\varphi(v_i)}$ is a weight vector because $\varphi(v_i)$ is a weight vector by hypothesis and the quotient map is $\mathfrak h$-equivariant. As $N/\mathfrak n^-N$ is $\mathfrak h$-semisimple, taking the weight-$\mu$ component of the relation lets us discard every generator whose class has weight different from $\mu$; hence $\bar u=\sum_i c_i\overline{\varphi(v_i)}$ with $c_i=0$ whenever $\operatorname{wt}\varphi(v_i)\ne\mu$ (for the surviving indices $c_i$ is the original coefficient and the corresponding vectors have weight $\mu$). Therefore $u-\sum_ic_i\varphi(v_i)\in N_\mu\cap\mathfrak n^-N$. [F3, step 1.2, algebra]

3.1 By [F3] the element $u-\sum_ic_i\varphi(v_i)$ has weight $\mu$ and lies in $\mathfrak n^-N=\sum_\alpha f_\alpha N$, so its weight-$\mu$ component is a sum $\sum_\alpha f_\alpha w_\alpha$ with $w_\alpha\in N_{\mu+\alpha}$: indeed $f_\alpha$ lowers weights by $\alpha$. Each $w_\alpha$ has weight $\mu+\alpha>_\mu$, so $w_\alpha\in\operatorname{im}\varphi$ by the induction hypothesis, and then $f_\alpha w_\alpha\in\operatorname{im}\varphi$ because $\operatorname{im}\varphi$ is a $U(\mathfrak n^-)$-submodule. Hence $u\in\operatorname{im}\varphi$. [F2, F3, step 2.1, algebra]

4.1 The base of the induction is the case of a maximal weight, where the sum in step 3.1 is empty and $u=\sum_ic_i\varphi(v_i)\in\operatorname{im}\varphi$; the induction is well founded by step 1.2. Since $N$ is spanned by its weight vectors, $\operatorname{im}\varphi=N$, so $\varphi$ is surjective. [F1, step 3.1] ∎
