---
id: ex-it-binary-symmetric-slepian-wolf-region
kind: example
title: "Binary symmetric source: Slepian–Wolf corners and common part"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - thm-it-slepian-wolf-rate-region
  - def-it-finite-iid-multisource
  - def-it-multiterminal-lossless-code
  - def-it-gacs-korner-and-wyner-common-information
  - def-it-finite-conditional-entropy
  - def-it-information-units-and-logarithm-base
  - thm-it-finite-kl-nonnegative-equality
  - thm-natural-logarithm-laws
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the example uses only a four-point distribution and finite sums."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 15"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§15.4, Slepian–Wolf rate region and binary/correlated-source examples, printed pp. 549–557."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 11, §11.6, Slepian–Wolf rate region, printed pp. 224–226."
---

## Example

Let $X$ be a uniform bit, let $N\sim\operatorname{Bernoulli}(p)$ be independent of $X$, and set $Y=X\oplus N$, where $0\le p\le1/2$. Use the IID source with this one-letter joint law, and put
$$h(p):=-p\ln p-(1-p)\ln(1-p),\qquad 0\ln0:=0.$$
The sloped segment of its Slepian–Wolf lower boundary joins $(h(p),\ln2)$ to $(\ln2,h(p))$ in nats per source symbol; when $p=1/2$ this segment collapses to $(\ln2,\ln2)$ and continues as the horizontal ray $R_2=\ln2$ for $R_1\ge\ln2$. For $p>0$ the deterministic Gács–Körner common part is constant. This example does not compute Wyner common information.

## Facts & Assumptions

**Given:** The binary source model and parameter range in the Example.

[F1] [[def-it-finite-iid-multisource]]: an IID two-source is specified by its finite joint one-letter law and its product block laws.

[F2] [[def-it-finite-conditional-entropy]]: conditional entropy is the finite weighted sum of the entropies of positive-mass conditional probability vectors.

[F3] [[thm-it-slepian-wolf-rate-region]]: the achievable region is given by all nonempty-subset conditional-entropy lower bounds.

[F4] [[def-it-gacs-korner-and-wyner-common-information]]: the deterministic Gács–Körner common part is the connected-component label of the joint-support bipartite graph; Wyner common information is a separate auxiliary-variable infimum.

[F5] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite entropy is $-\sum_{q_i>0}q_i\ln q_i$, with $0\ln0=0$, and finite KL divergence is directional.

[F6] [[thm-it-finite-kl-nonnegative-equality]]: $D(q\Vert r)\ge0$ for finite probability vectors, with equality only for equal laws.

[F7] [[thm-natural-logarithm-laws]]: $\ln$ is strictly increasing and $\ln1=0$.

## Verification

1.1 The one-letter joint masses are $P(0,0)=P(1,1)=(1-p)/2$ and $P(0,1)=P(1,0)=p/2$. Summing rows and columns gives uniform marginals. For either $y$, the conditional law of $X$ given $Y=y$ has masses $1-p$ and $p$; the same holds for $Y$ given $X=x$. Therefore [F2] gives $H_P(X\mid Y)=H_P(Y\mid X)=h(p)$, including $p=0$ and $p=1/2$ under the zero-term convention. [F1, F2, F5, algebra]

2.1 Directly summing the four joint entropy terms gives $H_P(X,Y)=\ln2+h(p)$: the two diagonal terms contribute $-(1-p)\ln((1-p)/2)$ and the two off-diagonal terms contribute $-p\ln(p/2)$, with zero terms omitted when $p=0$. [F5, step 1.1, algebra]

3.1 Since $0\le p\le1/2$, the binary entropy satisfies $0\le h(p)\le\ln2$. The lower bound follows termwise from $\ln t\le0$ for $0<t\le1$ and [F5], while [F6] applied to $(p,1-p)$ and $(1/2,1/2)$ gives $\ln2-h(p)\ge0$. Thus the region from [F3] is $R_1\ge h(p)$, $R_2\ge h(p)$, and $R_1+R_2\ge\ln2+h(p)$. For $h(p)\le R_1\le\ln2$, the sum constraint gives the boundary $R_2=\ln2+h(p)-R_1$, joining the stated endpoints; for $R_1\ge\ln2$, the coordinate bound $R_2\ge h(p)$ is the active lower boundary. [F3, F5, F6, F7, step 1.1, step 2.1, algebra]

4.1 If $p>0$, all four joint masses are positive, so the support bipartite graph in [F4] has every possible edge and is connected. Any common function $K=f(X)=g(Y)$ almost surely must then satisfy $f(0)=g(0)=f(1)=g(1)$, since each of the four pairs has positive probability. Hence the common part is constant and has entropy zero. [F1, F4, step 1.1, algebra] ∎

## Remarks

The Wyner quantity in [F4] is defined by a different optimization; its value is not asserted here.
