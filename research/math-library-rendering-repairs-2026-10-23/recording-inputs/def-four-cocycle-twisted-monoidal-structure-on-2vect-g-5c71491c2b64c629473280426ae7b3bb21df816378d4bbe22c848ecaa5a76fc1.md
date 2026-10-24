---
id: def-four-cocycle-twisted-monoidal-structure-on-2vect-g
kind: definition
title: Four-cocycle twisted monoidal structure on $2\mathrm{Vect}_G$
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-g-graded-two-vector-space
  - def-monoidal-weak-two-category
  - def-weak-linear-two-category
  - def-group
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.16
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.1
      url: https://arxiv.org/pdf/2306.08117
    - title: Décoppet, Extension Theory and Fermionic Strongly Fusion 2-Categories, Example 2.2
      url: https://www.maths.tcd.ie/EMIS/journals/SIGMA/2024/092/sigma24-092.pdf
---

## Definition

Let $G$ be a finite group ([[def-group]]), with identity $e$. A normalized multiplicative 4-cochain is a function $\omega:G^4\to k^\times$ equal to $1$ whenever any argument is $e$. It is a **group 4-cocycle** when, for all $g,h,k,l,m\in G$,
$$\omega(h,k,l,m)\omega(g,hk,l,m)\omega(g,h,k,lm)=\omega(gh,k,l,m)\omega(g,h,kl,m)\omega(g,h,k,l).$$

On $2\mathrm{Vect}_G$, define the tensor product by convolution:
$$\left(\mathcal A\otimes\mathcal B\right)_u=\bigoplus_{gh=u}\mathcal A_g\boxtimes\mathcal B_h,$$
where $\boxtimes$ is the finite semisimple tensor product of linear categories. The unit is $\mathrm{Vect}_k$ concentrated in degree $e$. The associator and unitors are the canonical rebracketing and unit equivalences. On four homogeneous inputs of degrees $g,h,k,l$, prescribe the pentagonator to be multiplication by the scalar $\omega(g,h,k,l)$ on every simple summand; extend it by direct sums and naturality. Denote this proposed weak monoidal 2-category structure by $2\mathrm{Vect}^{\omega}_G$.

The scalar is central, so its naturality is componentwise. The displayed group equation is the exact coherence condition to be checked for five homogeneous inputs. This definition includes no braiding and no claim about classification of all fusion 2-categories.
