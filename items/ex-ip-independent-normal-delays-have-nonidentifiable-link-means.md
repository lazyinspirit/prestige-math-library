---
id: ex-ip-independent-normal-delays-have-nonidentifiable-link-means
kind: example
title: "A shared-link Gaussian tree with nonidentifiable link means"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - def-identifiability-of-an-estimand
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. Lawrence, G. Michailidis, and V. N. Nair, Statistical Inverse Problems in Active Network Tomography, IMS Lecture Notes–Monograph Series 54 (2007), 24–44"
      url: "https://arxiv.org/pdf/0708.1079"
      locator: "§1, Example 3, PDF p. 3 (printed p. 26): two-leaf additive Gaussian delay model and nonidentifiable means"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume AC for the library's standard-normal-law convention. Let a rooted tree have root $o$, one shared link $e_0=(o,v)$, and two branch links $e_1=(v,r_1)$ and $e_2=(v,r_2)$ to leaf receivers. On each probe, the three link delays are independent with laws $X_i\sim N(\mu_i,1)$, $i=0,1,2$, and the observed path delays are $Y_1=X_0+X_1$ and $Y_2=X_0+X_2$. The distinct link-mean vectors $\mu=(0,0,0)$ and $\mu'=(1,-1,-1)$ induce the same joint law of $(Y_1,Y_2)$; hence the three link means are not identifiable. The same equality holds for any number of independent repeated probes with these fixed link laws.

The diagram labels the shared and branch links by their delay variables; the two rightmost vertices are the receivers.

```tikz
\begin{tikzpicture}[>=stealth]
  \node[circle,draw] (o) at (0,1.5) {$o$};
  \node[circle,draw] (v) at (2,1.5) {$v$};
  \node[circle,draw] (r1) at (4,2.5) {$r_1$};
  \node[circle,draw] (r2) at (4,0.5) {$r_2$};
  \draw[->] (o) -- node[above] {$X_0$} (v);
  \draw[->] (v) -- node[above] {$X_1$} (r1);
  \draw[->] (v) -- node[below] {$X_2$} (r2);
\end{tikzpicture}
```

## Example references

[[def-standard-normal-and-normal-laws|Standard normal and normal laws]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-identifiability-of-an-estimand|Identifiability of an estimand]]

[Lawrence, Michailidis, and Nair, Example 3](https://arxiv.org/pdf/0708.1079)

## Facts & Assumptions

**Given:** The stated rooted tree, independent link delays with fixed means $\mu_i$ and variance $1$, and the two observed path sums. Assume AC only for the cited library definition of the normal laws.

[A1] [[def-axiom-of-choice]]: AC says every family of nonempty sets has a choice function; it is assumed here only because the cited normal-law definition declares it.

[F1] [[def-standard-normal-and-normal-laws]]: $N(\mu,1)$ is the pushforward of the standard normal law under $z\mapsto\mu+z$; the definition assumes AC.

[F2] [[def-identifiability-of-an-estimand]]: The identity target is identifiable exactly when equal sampling laws force equal parameter vectors.

## Verification

1.1 On one probability space carrying independent $Z_0,Z_1,Z_2\sim N(0,1)$, set $X_i^{\mu}=\mu_i+Z_i$ and $X_i^{\mu'}=\mu_i'+Z_i$. By [F1], each vector has the required independent link-delay laws. [given, A1, F1, construct]

2.1 For $\mu=(0,0,0)$ the observation vector is $(Z_0+Z_1,Z_0+Z_2)$. For $\mu'=(1,-1,-1)$ it is $((1+Z_0)+(-1+Z_1),(1+Z_0)+(-1+Z_2))=(Z_0+Z_1,Z_0+Z_2)$. Thus the two observation vectors are equal on this coupling and have the same joint law; independent repetitions also have the same law. [given, F1, step 1.1, algebra]

3.1 The mean vectors are distinct, so [F2] implies that the identity link-mean target is not identifiable from the observed path-delay law. [given, F2, step 2.1, algebra] ∎
