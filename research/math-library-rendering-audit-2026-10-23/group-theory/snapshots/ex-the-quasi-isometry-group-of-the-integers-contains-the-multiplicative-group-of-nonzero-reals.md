---
id: ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals
kind: example
title: "Scaling maps embed the multiplicative group of nonzero reals into the quasi-isometry group of $\\mathbb Z$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-quasi-isometry-group-of-a-metric-space, prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups, def-coarsely-dense-subset-and-quasi-isometry, lem-integer-part, lem-real-line-is-a-metric-space, def-group-isomorphism-and-automorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Example

Scaling maps embed the multiplicative group of nonzero reals into the quasi-isometry group of $\mathbb Z$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The quasi-isometry group of a metric space is the set of quasi-isometries of it modulo bounded distance ([[def-quasi-isometry-group-of-a-metric-space]]).

[L1] The quasi-isometry group is a group under composition, and a quasi-isometry induces an isomorphism between the quasi-isometry groups of its source and target ([[prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups]]).

[L2] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L3] It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**, of $x$. ([[lem-integer-part]]).

[L4] Define $d_{\mathbb{R}}: \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by $d_{\mathbb{R}}(x,y):= |x - y|$. ([[lem-real-line-is-a-metric-space]]).

[L5] Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$. ([[def-group-isomorphism-and-automorphism]]).


## Verification

**Proof technique:** direct.

1.1 For $\alpha\ne0$ let $q_\alpha(n)=\lfloor\alpha n\rfloor$. The estimate $|\lfloor u\rfloor-\lfloor v\rfloor|\le |u-v|+1$ shows $q_\alpha$ is coarse Lipschitz, and $q_{1/\alpha}$ is a quasi-inverse because $$ \bigl|q_\alpha(q_{1/\alpha}(n))-n\bigr|<|\alpha|+1 \quad\text{and}\quad \bigl|q_{1/\alpha}(q_\alpha(n))-n\bigr|<|1/\alpha|+1 $$ for every integer $n$. So $q_\alpha$ is a quasi-isometry of $\mathbb Z$. [F1, L2, L3, L4]

2.1 Composing the maps for $\alpha$ and $\beta$ agrees with the map for $\alpha\beta$ up to an error of at most $|\alpha|+1$, so the assignment $\alpha\mapsto[q_\alpha]$ is a homomorphism on classes. [L3, step 1.1]

3.1 For $\alpha\ne\beta$ the difference $|\lfloor\alpha n\rfloor-\lfloor\beta n\rfloor|$ is unbounded, so the homomorphism is injective. [F1, L1, L5, step 2.1] ∎
