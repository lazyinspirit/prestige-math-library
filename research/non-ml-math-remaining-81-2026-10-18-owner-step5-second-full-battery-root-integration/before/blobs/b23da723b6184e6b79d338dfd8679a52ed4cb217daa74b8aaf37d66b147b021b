---
id: lem-it-finite-selected-codeword-markov-typicality
kind: lemma
title: "Markov typicality for independently selected finite codewords"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-finite-strongly-typical-set
  - lem-it-finite-codebook-covering-selection-law
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all alphabets are finite and the probability bound is a finite union of Chebyshev bounds."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 13, Markov Lemma and proof, pp. 5–6 and Appendix, pp. 44–48."
    - title: "João Barros, Reachback Communication in Wireless Sensor Networks, doctoral dissertation"
      url: "https://mediatum.ub.tum.de/doc/601579/601579.pdf"
      locator: "Chapter 4, §4.2.1, printed pp. 67–70, conditional type selection and joint-typicality decoder."
---

## Statement

Let $P_{XYZ}(x,y,z)=P_{XY}(x,y)P_{Z|X}(z|x)$ be a finite-alphabet Markov law. For every $\epsilon>0$ there are $\delta>0$ and $n_0$ such that the following holds for $n\ge n_0$: if $(x^n,y^n)\in T_\delta^{(n)}(P_{XY})$ and a random $Z^n$ is supported on $T_\delta^{(n)}(P_{Z|X}\mid x^n)$ and, conditional on each joint type of $(x^n,Z^n)$, is uniform on that conditional type class, then
$$\Pr\{(x^n,y^n,Z^n)\in T_\epsilon^{(n)}(P_{XYZ})\}\ge1-\frac{C}{n},$$
where $C<\infty$ depends only on the fixed finite law, alphabets, and $\epsilon$, not on the particular typical source block or conditional type.

## Facts & Assumptions

**Given:** The finite Markov law, $\epsilon>0$, a typical fixed source block $(x^n,y^n)$, and the stated conditional-type-uniform law of $Z^n$.

[A1] $P_{XYZ}=P_{XY}P_{Z|X}$: conditional on $X=x$, the target law of $Z$ does not depend on $Y$.

[F1] [[def-it-finite-strongly-typical-set]]: relative typicality excludes every zero-probability atom and bounds each positive empirical frequency by its relative tolerance.

[F2] [[lem-it-finite-codebook-covering-selection-law]]: conditional on a successful iid marginal-codebook search, the selected codeword is supported on the conditional typical set and is uniform within each conditional type class.

## Proof

1.1 Fix a conditional type $q_{Z|X}$ that can occur under the stated law. For each $x$ with $n_x:=|\{t:x_t=x\}|>0$, there are $n_{xy}$ positions with $(x_t,y_t)=(x,y)$ and $n_{xz}$ positions with $(x_t,Z_t)=(x,z)$. Conditional-type uniformity means that, among the $n_x$ positions with $X=x$, the $z$ labels are assigned uniformly over all arrangements with these counts. Hence $N_{xyz}:=|\{t:(x_t,y_t,Z_t)=(x,y,z)\}|$ is hypergeometric, with $\mathbb E N_{xyz}=\frac{n_{xy}n_{xz}}{n_x},\qquad \operatorname{Var}(N_{xyz})\le n_x.$ When $n_x=0$, all these counts vanish. [A1, F1, F2, construct]

2.1 By [F1], $n_{xy}/n$ and $n_{xz}/n$ are uniformly close to $P_{XY}(x,y)$ and $P_{XZ}(x,z)$, respectively. For $P_X(x)>0$, division by $n_x/n$ shows that $n_{xz}/n_x$ is close to $P_{Z|X}(z|x)$. Thus, after choosing $\delta$ sufficiently small, the mean frequency $\mathbb E N_{xyz}/n=(n_{xy}/n)(n_{xz}/n_x)$ is within half the required relative tolerance of $P_{XYZ}(x,y,z)$ for every positive-probability triple. If $P_{XYZ}(x,y,z)=0$, either $(x,y)$ is excluded by the source support condition or $(x,z)$ is excluded by the conditional support condition, so $N_{xyz}=0$. [A1, F1, step 1.1, algebra]

3.1 For a positive-probability triple, Chebyshev's inequality and step 1.1 give $\Pr\{|N_{xyz}-\mathbb E N_{xyz}|>\tfrac12 n\epsilon P_{XYZ}(x,y,z)\}\le\frac{4n_x}{n^2\epsilon^2P_{XYZ}(x,y,z)^2}\le\frac{4}{n\epsilon^2P_{XYZ}(x,y,z)^2}.$ There are finitely many triples. A union bound makes the probability that any empirical triple frequency misses its required tolerance at most $C/n$ for a finite constant $C$ depending only on the law, alphabets, and $\epsilon$. This bound is uniform in every admissible conditional type, so it remains valid after mixing over the conditional-type distribution of $Z^n$. The complement event is exactly strong typicality of $(x^n,y^n,Z^n)$, proving the claim. [F1, step 1.1, step 2.1, algebra] ∎

