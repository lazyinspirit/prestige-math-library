---
id: thm-it-finite-entropy-chain-rule
kind: theorem
title: "Finite entropy and mutual-information chain rules"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-finite-conditional-entropy, def-it-finite-mutual-information, def-it-finite-conditional-mutual-information, thm-it-finite-conditional-mutual-information-identities-and-equality, lem-it-finite-marginals-and-conditionals-are-pmfs, def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-natural-logarithm-laws]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all joint and conditional laws have finite support."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.5, printed pp. 35–42; entropy and mutual-information chain rules."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 1, §1.1, printed pp. 11–13, Theorem 1.4(e)–(g); Chapter 3, §3.4, pp. 50–52, Theorem 3.7(b)."
---

## Statement

For finite $X,Y,Z$ with a joint pmf,

$$H(X,Y|Z)=H(X|Z)+H(Y|X,Z),$$

and

$$I(X;Y,Z)=I(X;Z)+I(X;Y|Z).$$

In particular, $I(X;Y)=H(X)-H(X|Y)=H(Y)-H(Y|X)$. All terms are finite.

## Facts & Assumptions

**Given:** A joint probability vector $p_{XYZ}$ on finite alphabets.

[F1] [[def-it-finite-conditional-entropy]]: $H(U|V)=\sum_{v:p_V(v)>0}p_V(v)H(p_{U|v})$, with zero-mass conditioning values omitted.

[F2] [[def-it-finite-mutual-information]]: $I(U;V)=\sum_{p_{UV}(u,v)>0}p_{UV}(u,v)\ln[p_{UV}(u,v)/(p_U(u)p_V(v))]$.

[F3] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: $I(X;Y|Z)=H(X|Z)+H(Y|Z)-H(X,Y|Z)$.

[F4] [[lem-it-finite-marginals-and-conditionals-are-pmfs]]: conditional pmfs are formed by division by positive marginal mass and are probability vectors.

[F5] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(p)=-\sum_{p_i>0}p_i\ln p_i$, with $0\ln0=0$.

[F6] [[thm-natural-logarithm-laws]]: for positive $x,y$, $\ln(xy)=\ln x+\ln y$ and $\ln(x/y)=\ln x-\ln y$.

## Proof

1.1 Fix $z$ with $p_Z(z)>0$ and write $q_{xy}=p_{XY|z}(x,y)$, $q_x=\sum_yq_{xy}$; for $q_x>0$ define $q_{y|x}=q_{xy}/q_x$. By [F4], these are pmfs and $q_{xy}=q_xq_{y|x}$ on positive support. On that support both factors are positive, so the product law [F6] gives $-\sum_{q_{xy}>0}q_{xy}\ln q_{xy}=-\sum_{q_x>0}\sum_{y:q_{y|x}>0}q_xq_{y|x}(\ln q_x+\ln q_{y|x})$. For every $q_x>0$, $\sum_{y:q_{y|x}>0}q_{y|x}=1$. Thus the terms involving $\ln q_x$ sum to $-\sum_{q_x>0}q_x\ln q_x$, and the remaining terms are $\sum_{q_x>0}q_x(-\sum_{q_{y|x}>0}q_{y|x}\ln q_{y|x})$, exactly $H(q_X)+\sum_xq_xH(q_{Y|x})$ by [F5]. Weighting this equality by $p_Z(z)$ and summing over positive-mass $z$ using [F1] proves $H(X,Y|Z)=H(X|Z)+H(Y|X,Z)$. Zero atoms are omitted from the displayed logarithmic sums. [F1, F4, F5, F6, given, algebra]

1.2 Every positive joint atom has positive marginals by [F4]; applying the quotient and product laws [F6] to [F2] gives $I(U;V)=\sum_{p_{uv}>0}p_{uv}(\ln p_{uv}-\ln p_U(u)-\ln p_V(v))$. Grouping the finite sums by $u,v$, using [F4] to know the marginals, and applying [F5] yields $I(U;V)=H(U)+H(V)-H(U,V)$. Also, [F1] and $p_{U|v}=p_{UV}/p_V$ on positive support give $H(U|V)=-\sum_{p_{uv}>0}p_{uv}\ln(p_{uv}/p_V(v))=H(U,V)-H(V)$. Thus $I(U;V)=H(U)-H(U|V)$, and exchanging $U,V$ gives the other form. All sums are finite. [F1, F2, F4, F5, F6, algebra]

2.1 Apply step 1.1 and [F3] to get $I(X;Y|Z)=H(Y|Z)-H(Y|X,Z)$. By step 1.2, $H(Y,Z)=H(Z)+H(Y|Z)$ and $H(X,Y,Z)=H(Z)+H(X,Y|Z)=H(X,Z)+H(Y|X,Z)$. Therefore $I(X;Y,Z)=H(X)+H(Y,Z)-H(X,Y,Z)=I(X;Z)+I(X;Y|Z)$. Every entropy is a finite sum, so no extended-real subtraction occurs. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎
