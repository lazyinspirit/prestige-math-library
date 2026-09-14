---
id: ex-tautological-real-and-complex-lines-over-projective-space
kind: example
title: Tautological lines over projective spaces
status: draft
origin: pipeline
deps: [def-stiefel-space-grassmannian-and-tautological-bundle, thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §§1.1–1.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Canonical line bundle pp.8–9 and Grassmannian classifying map pp.28–31"
    - title: "Milnor and Stasheff, Characteristic Classes, §§2 and 5"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Canonical and universal bundles, printed pp.16–18 and 55–66"
---

## Example

For $\mathbb F=\mathbb R$ or $\mathbb C$, the tautological line
$\gamma_1$ over $\mathbb FP^N$ has fiber the line represented by its base
point. For finite $N$, its inclusion in
$\mathbb FP^N\times\mathbb F^{N+1}$ has Grassmannian classifying map the
standard finite-stage inclusion

$$\operatorname{Gr}_1(\mathbb F^{N+1})\longrightarrow\operatorname{Gr}_1(\mathbb F^\infty).$$

For $N=\infty$ this map is the identity of
$B\operatorname O(1)=\mathbb RP^\infty$ or
$B\operatorname U(1)=\mathbb CP^\infty$.

## Facts & Assumptions

**Given:** $\mathbb F=\mathbb R$ or $\mathbb C$ and
$N\in\mathbb N\cup\{\infty\}$.

[F1] $\operatorname{Gr}_1(\mathbb F^M)$ consists of lines in
$\mathbb F^M$, and its tautological bundle has fiber that line
([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F2] The stable Grassmannians are denoted $B\operatorname O(n)$ and
$B\operatorname U(n)$ in the real and complex models, respectively
([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

## Verification

**Proof technique:** direct.

1.1 For finite $N$, by definition $\mathbb FP^N$ is the quotient of $\mathbb F^{N+1}\setminus\{0\}$ by nonzero scalar multiplication, so a point is exactly a line $\ell\subseteq\mathbb F^{N+1}$. Hence $\mathbb FP^N=\operatorname{Gr}_1(\mathbb F^{N+1})$, and the set $\{(\ell,v):v\in\ell\}$ is exactly the tautological bundle in [F1]. For $N=\infty$, both projective space and its tautological line are the filtered unions of these finite stages inside $\mathbb F^\infty$; no expression $\mathbb F^{\infty+1}$ is used. [F1, given]

2.1 For finite $N$, the displayed bundle inclusion sends its fiber over $\ell$ to the same line $\ell$ in $\mathbb F^{N+1}\subseteq\mathbb F^\infty$. Taking image planes therefore sends $\ell$ to itself under the standard finite-stage inclusion, and pulling back $\gamma_1$ returns the original pairs $(\ell,v)$. At $N=\infty$ the same assertion is the identity on the filtered union. [F1, step 1.1]

3.1 For $N=\infty$, the finite-stage inclusions unite to the identity on $\operatorname{Gr}_1(\mathbb F^\infty)$. The classifying-space notation in [F2] gives $B\operatorname O(1)$ and $B\operatorname U(1)$, while step 1.1 gives $\mathbb RP^\infty$ and $\mathbb CP^\infty$. All identifications are direct and use no choice principle. [F1, F2, step 1.1, step 2.1] ∎
