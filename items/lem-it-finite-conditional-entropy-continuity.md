---
id: lem-it-finite-conditional-entropy-continuity
kind: lemma
title: "Continuity of finite conditional entropy in the joint law"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-conditional-entropy
  - lem-it-finite-marginals-and-conditionals-are-pmfs
  - lem-it-finite-relative-entropy-continuity-on-simplex
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all alphabets and sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Chapter 1, §1.1, Theorem 1.4 and the continuity of finite entropy at zero, printed pp. 11–13."
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "Chapter 11, §11.4, Theorem 11.4.1 proof, printed pp. 362–363; finite-simplex entropy and divergence continuity."
---

## Statement

For fixed finite nonempty alphabets $\mathcal U,\mathcal V$, the map from a joint probability vector $q_{UV}$ on $\mathcal U\times\mathcal V$ to its conditional entropy $H_q(U\mid V)$ is continuous on the joint probability simplex.

## Facts & Assumptions

**Given:** The finite alphabets $\mathcal U,\mathcal V$ and a joint probability vector $q_{UV}$.

[F1] [[def-it-finite-conditional-entropy]]: $H_q(U\mid V)=\sum_{v:q_V(v)>0}q_V(v)H(q_{U\mid v})$, with zero-mass conditioning values omitted.

[F2] [[lem-it-finite-marginals-and-conditionals-are-pmfs]]: the marginals of a finite joint law are probability vectors, and each positive-mass conditional vector is a probability vector.

[F3] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(r)=-\sum_{i:r_i>0}r_i\ln r_i$ and $D(r\Vert s)=\sum_{i:r_i>0}r_i\ln(r_i/s_i)$, with $0\ln0=0$.

[F4] [[lem-it-finite-relative-entropy-continuity-on-simplex]]: if $s$ is a fixed full-support probability vector on a finite alphabet, then $r\mapsto D(r\Vert s)$ is finite and continuous on the full simplex, including its boundary.

## Proof

1.1 Let $r$ be a probability vector on an alphabet of size $m\ge1$, and let $u_m$ be the uniform vector. Expanding the finite sum in [F3] gives $D(r\Vert u_m)=\ln m-H(r)$, including zero coordinates by the stated convention. Since $u_m$ has full support, [F4] shows that $r\mapsto D(r\Vert u_m)$ is continuous. Therefore finite entropy is continuous on every finite simplex. [F3, F4, algebra]

2.1 For any joint vector $q_{UV}$, [F1] and [F2] give $H_q(U\mid V)=-\sum_{(u,v):q_{UV}(u,v)>0}q_{UV}(u,v)\ln\frac{q_{UV}(u,v)}{q_V(v)}=H(q_{UV})-H(q_V)$. The ratio is defined on every positive joint atom because then $q_V(v)>0$. The marginal map $q_{UV}\mapsto q_V$ is linear. By step 1.1, both terms on the right are continuous functions of $q_{UV}$, so their difference is continuous on the joint simplex. [F1, F2, F3, step 1.1, algebra] ∎
