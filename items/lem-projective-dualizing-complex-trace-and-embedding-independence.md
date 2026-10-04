---
id: lem-projective-dualizing-complex-trace-and-embedding-independence
kind: lemma
title: "Normalized trace and independence of a projective embedding"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "def-dualizing-complex-on-projective-cm-scheme", "lem-finite-closed-immersion-derived-coinduction-adjunction", "lem-projective-embedding-dualizing-complex-existence", "lem-projective-space-derived-coherent-duality", "lem-yoneda-evaluation-bijection"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks, Lemma 48.27.1(5) and its footnote: Yoneda characterization"
      url: https://stacks.math.columbia.edu/tag/0FVV
    - title: "Stacks, Remark 48.27.2: trace and composition pairing"
      url: https://stacks.math.columbia.edu/tag/0FVW
    - title: "Vakil 2025, 29.1.7 and 29.3.11: uniqueness and trace via evaluation"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
---

## Statement

Assume AC. For a projective scheme $X/k$ and a closed embedding $i:X\hookrightarrow P=\mathbb P^N_k$, the dualizing complex $D_i=i^!(\omega_P[N])$ has a trace
$$t_i:R\Gamma(X,D_i)\xrightarrow{\mathrm{counit}}R\Gamma(P,\omega_P[N])\xrightarrow{t_P}k.$$
For $K\in D^b_{\mathrm{Coh}}(X)$ this trace induces natural isomorphisms
$$\operatorname{Hom}_{D(X)}(K,D_i[r])\cong\operatorname{Hom}_k(H^{-r}(X,K),k)\quad(r\in\mathbb Z),$$
by composition with a class $\mathcal O_X\to K[-r]$ and $t_i$. Two embeddings give a unique isomorphism between their complexes which identifies these duality isomorphisms; it preserves the trace. Write the resulting normalized object as $D_X$.

## Facts & Assumptions

**Given:** $X,k,i,K,r$ and AC.

[F1] Construction and coherent biduality are [[lem-projective-embedding-dualizing-complex-existence]].

[F2] Closed-immersion adjunction and cohomology comparison are [[lem-finite-closed-immersion-derived-coinduction-adjunction]].

[F3] Derived projective-space duality with its evaluation trace is [[lem-projective-space-derived-coherent-duality]]; the Yoneda evaluation bijection identifies natural transformations from a representable functor with elements of the representing value ([[lem-yoneda-evaluation-bijection]]).

## Proof

1.1 The adjunction [F2] identifies $R\operatorname{Hom}_X(K,D_i)$ with $R\operatorname{Hom}_P(i_*K,\omega_P[N])$. The pushforward $i_*K$ is bounded coherent, so [F3] identifies the latter with $R\operatorname{Hom}_k(R\Gamma(P,i_*K),k)$, which equals $R\operatorname{Hom}_k(R\Gamma(X,K),k)$ by [F2]. Cohomology in degree $r$ gives the displayed formula. The comparison is the evaluation pairing: for maps $\alpha:K\to D_i[r]$ and $\beta:\mathcal O_X\to K[-r]$, adjunction takes $\alpha$ to the ambient map followed by the counit. It takes $\beta$ followed by $i_*\mathcal O_X$ to the same ambient composition; pulling back the unit $\mathcal O_P\to i_*\mathcal O_X$ makes the equality immediate by evaluation at $1$. Thus the paired scalar is $t_i(\alpha[-r]\circ\beta)$, not merely an unspecified vector-space isomorphism. [F1, F2, F3, construct]

2.1 At $r=0$, each embedding gives a representation on $D^b_{\mathrm{Coh}}(X)$ of the same contravariant functor $K\mapsto\operatorname{Hom}_k(H^0(X,K),k)$. Both representing objects lie in that category by [F1]. The Yoneda evaluation bijection [F3] supplies a unique isomorphism: evaluate the natural comparison at the first representing object on its identity, and do the reverse at the second; naturality says that the two composites are identities. The trace itself is recovered by evaluating the represented functional for a map $\mathcal O_X\to D_i$ at $1\in H^0(X,\mathcal O_X)$, so this isomorphism preserves it. Naturality under shifts then preserves every degree and triangle comparison. These unique isomorphisms compose transitively, proving independence of the embedding with its normalization; an unnormalized dualizing complex alone is not claimed to be uniquely isomorphic. AC is retained from [F1]–[F3]. [F1, F3, step 1.1, algebra] ∎
