---
id: "ex-uct-as-a-two-column-spectral-sequence-over-the-integers"
kind: "example"
title: "UCT as a two-column spectral sequence over the integers"
deps: ["thm-universal-coefficient-spectral-sequence", "thm-universal-coefficient-theorem-for-cohomology-over-a-pid", "prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem", "thm-submodules-of-free-modules-over-a-pid-are-free", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Sections 5.6-5.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Example

Assume AC. For a bounded-below free integer chain complex $C$ and an abelian group $M$, the UCT sequence has only resolution columns $p=0,1$, and its finite decreasing filtration gives
$$0\to\operatorname{Ext}_{\mathbb Z}^1(H_{n-1}C,M)\to H^n\operatorname{Hom}(C,M)\xrightarrow{\mathrm{ev}}\operatorname{Hom}_{\mathbb Z}(H_nC,M)\to0.$$
For $C_1=\mathbb Za\oplus\mathbb Zb$, $C_0=\mathbb Zc$, $da=2c,db=0$, and $M=\mathbb Z/2$, the nonzero $E_2$ entries are $\mathbb Z/2$ at $(0,0),(1,0),(0,1)$. The target is $\mathbb Z/2$ in degree zero and $(\mathbb Z/2)^2$ in degree one.

## Facts & Assumptions

**Given:** The AC and bounded free-complex hypotheses above.

[F1] UCT has page $\operatorname{Ext}^p(H_qC,M)$ and finite decreasing filtration ([[thm-universal-coefficient-spectral-sequence]]).

[F2] Under AC submodules of free PID modules are free ([[thm-submodules-of-free-modules-over-a-pid-are-free]]).

[F3] The UCT quotient is evaluation, and its cycle-boundary construction identifies the Ext kernel ([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[F4] A chosen cycle retraction supplies a UCT section; a chain shear prevents general naturality ([[prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem]]).

## Verification

1.1 Present any abelian group by the free group on its underlying set. F2 makes the kernel free, and AC lifts arbitrary basis images to prove these free groups projective. Thus every such group has a projective resolution of length at most one and Ext vanishes for $p>1$. In F1 every $d_r$ for $r\ge2$ changes $p$ by at least two, so its source or target vanishes. Therefore $E_2=E_\infty$, and $F^1H^n$ is the Ext-one term while $H^n/F^1H^n$ is the Hom term. The edge is restriction of a Hom cocycle to cycles, hence evaluation as in F3; the boundary quotient defining its kernel is the same free presentation of $H_{n-1}C$ used in F3. This proves the displayed exact sequence with its actual arrows. [F1, F2, F3]

2.1 For the specified $C$, its homology is $H_0C=\mathbb Z/2$, $H_1C=\mathbb Zb$, zero elsewhere. Hom of the presentation $\mathbb Z\xrightarrow{2}\mathbb Z$ into $M$ has zero differential, so Hom and Ext-one of $\mathbb Z/2$ into $M$ are both $M$. Hom of $\mathbb Z$ is $M$ and its positive Ext is zero, using its one-term projective resolution. This gives exactly the three asserted page entries. Directly, $\operatorname{Hom}(C,M)$ is $M\xrightarrow{0}M^2$ in degrees zero and one, confirming both targets and zero in all other degrees. [F1, step 1.1]

3.1 In degree zero $F^0H^0=M,F^1H^0=0$. In degree one, identify a cochain by $(x,y)=(f(a),f(b))$; then $F^0H^1=M^2$, $F^1H^1=M\oplus0$, $F^2H^1=0$. Evaluation is $(x,y)\mapsto y$ and the Ext injection is $x\mapsto(x,0)$. The section $y\mapsto(0,y)$ splits this particular extension. But $a\mapsto a+b$ fixes homology and induces $(x,y)\mapsto(x+y,y)$, which moves every lift of $1$; hence no section is natural in $C$, in agreement with F4. The finite endpoints prove there is no unresolved convergence issue. AC is used for the general free-kernel argument and optional general sections; this displayed finite calculation itself makes no infinite choices. [F3, F4, step 1.1, step 2.1] ∎
