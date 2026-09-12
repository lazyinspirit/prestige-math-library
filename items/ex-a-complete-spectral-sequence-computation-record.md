---
id: "ex-a-complete-spectral-sequence-computation-record"
kind: "example"
title: "A complete spectral-sequence computation record"
deps: ["def-spectral-sequence-computation-record", "ex-uct-as-a-two-column-spectral-sequence-over-the-integers", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Sections 5.2 and 5.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Example

A complete record for the integer UCT example takes $C_1=\mathbb Za\oplus\mathbb Zb$, $C_0=\mathbb Zc$, $da=2c,db=0$, and $M=\mathbb Z/2$. Use cohomological $E_r^{p,q}$, $d_r$ of degree $(r,1-r)$ and a decreasing filtration by projective resolution degree $p$. The Hom convention is $\operatorname{Hom}(C,M)^n=\operatorname{Hom}(C_n,M)$ with $\delta f=f d_C$. The computation is in all total degrees, under the AC convention of general integer UCT.

Its complete page data are $E_2^{0,0}=E_2^{1,0}=E_2^{0,1}=\mathbb Z/2$ and zero elsewhere. All $d_r$ for $r\ge2$ vanish and $E_\infty=E_2$. The target is $H^0=M$, $H^1=M^2$, zero otherwise. In degree one the filtration is $M^2\supset M\oplus0\supset0$, with quotient map $(x,y)\mapsto y$ and inclusion $x\mapsto(x,0)$. A section is $y\mapsto(0,y)$; there is no general natural section in $C$.

## Facts & Assumptions

**Given:** The displayed complex, coefficients, indexing and full-degree computation range.

[F1] A complete record resolves its page, differential, convergence, reconstruction and edge obligations ([[def-spectral-sequence-computation-record]]).

[F2] The integer UCT example computes these three page entries, the finite target filtration and evaluation map under AC ([[ex-uct-as-a-two-column-spectral-sequence-over-the-integers]]).

## Verification

1.1 The input homology is $H_0C=\mathbb Z/2$, $H_1C=\mathbb Z$, zero elsewhere. Applying Hom into $M$ to $\mathbb Z\xrightarrow{2}\mathbb Z$ gives $M\xrightarrow{0}M$, so the degree-zero and degree-one Ext entries of $H_0C$ are $M$. The one-term projective resolution of $H_1C$ contributes only $M$ at $(0,1)$. The AC free-kernel argument in F2 kills every $p>1$ entry, giving exactly the stated page. [F2]

2.1 No later arrow can join columns zero and one: its first-coordinate change is $r\ge2$. Every possible incoming arrow also starts in a zero column, unless its target has first coordinate at least two, in which case that target is zero. Thus every later differential vanishes at every bidegree, not just those displayed, and $E_2=E_\infty$. F2 supplies first-quadrant finite-filtration convergence to Hom cohomology. Directly this Hom complex is $M\xrightarrow{0}M^2$, confirming the target and vanishing in all other degrees. [F1, F2, step 1.1]

3.1 In degree zero the only quotient has filtration index zero, so $F^0H^0=M,F^1H^0=0$. In degree one, evaluation on $b$ gives $(x,y)\mapsto y$, with kernel $M\oplus0$; these are the two graded pieces at $(0,1)$ and $(1,0)$. Thus the exact extension is $0\to M\xrightarrow{x\mapsto(x,0)}M^2\xrightarrow{(x,y)\mapsto y}M\to0$. The lower edge in degree one is the displayed injection; the upper edge is evaluation. In degree zero both edges are the identity under the kernel identification. All edges in degrees at least two have zero target and zero source here. This fixes every endpoint and reconstructs the actual extension. [F1, F2, step 2.1]

4.1 The section $y\mapsto(0,y)$ exists explicitly. Under the chain automorphism $a\mapsto a+b$, Hom cohomology transforms as $(x,y)\mapsto(x+y,y)$ while the graded endpoints are fixed; no lift of $1$ is fixed. Consequently the section is not natural, and no alternative section restores naturality for all chain maps. AC has been used only through the general UCT free-submodule/projective and replacement conventions of F2; all computations for these specified finite free complexes are explicit. Every obligation of F1 is now resolved in all degrees, with no unknown differential, extension or convergence qualification. [F1, F2, step 3.1] ∎
