---
id: "prop-collapse-of-uct-or-kunneth-still-leaves-the-recorded-extension-problem"
kind: "proposition"
title: "UCT and Kunneth collapse retains an extension problem"
deps: ["thm-universal-coefficient-spectral-sequence", "cor-the-pid-kunneth-short-exact-sequence-is-the-two-column-collapse", "prop-collapse-does-not-in-general-split-the-abutment", "thm-universal-coefficient-theorem-for-cohomology-over-a-pid", "def-axiom-of-choice"]
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
    - title: "Weibel, Sections 5.2 and 5.6"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Two-column UCT or Künneth collapse determines the natural short exact sequence of its two filtration quotients; collapse alone supplies no canonical direct-sum decomposition. This assertion about a finite filtration is choice-free. Over a PID and under AC, the cited UCT sequence for a free chain complex and the cited Künneth sequence for two bounded-below free complexes admit splittings, but these need not be natural in the complexes.

## Facts & Assumptions

**Given:** The convergent sequences below when their hypotheses hold, and their finite two-column filtrations.

[F1] UCT has Ext second page and finite decreasing filtration ([[thm-universal-coefficient-spectral-sequence]]).

[F2] The PID Künneth sequence is the two-column collapse and has noncanonical splittings under AC ([[cor-the-pid-kunneth-short-exact-sequence-is-the-two-column-collapse]]).

[F3] A collapsed spectral sequence need not split its abutment ([[prop-collapse-does-not-in-general-split-the-abutment]]).

[F4] The PID UCT exact sequence uses evaluation and the cycle-boundary free-submodule argument under AC ([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]).

[F5] AC supplies set-indexed choices ([[def-axiom-of-choice]]).

## Proof

1.1 With only resolution columns zero and one, the decreasing UCT filtration is $0\subset F^1H^n\subset H^n$, giving $0\to E_\infty^{1,n-1}\to H^n\to E_\infty^{0,n}\to0$. The increasing Künneth filtration instead gives $0\to E^\infty_{0,n}\to H_n\to E^\infty_{1,n-1}\to0$. Collapse identifies these graded terms with the second page but selects no section of either quotient. These are kernel/quotient constructions requiring no choice. [F1, F2]

2.1 The obstruction is concrete: $0\to2\mathbb Z/4\to\mathbb Z/4\to\mathbb Z/2\to0$ has both graded pieces $\mathbb Z/2$, but cannot split. A lift of the quotient generator is $1$ or $3$ modulo four, and neither is killed by two. F3 realizes precisely this ambiguity in a collapsed filtered complex. This is a general collapse example, not a claim that this nonsplit extension is realized by free-PID UCT. [F3, step 1.1]

2.2 In the separate PID UCT setting of F4, AC makes $B_{n-1}C$ projective and permits a section of $C_n\to B_{n-1}C$, hence a retraction $r:C_n\to Z_nC$. For $\phi:H_nC\to M$, the cochain $\phi\,\pi\,r$ is a cocycle: on $d_{n+1}C_{n+1}=B_nC$, $r$ is the identity and $\pi$ kills it. Its cohomology class evaluates to $\phi$, and dependence on $\phi$ is additive. Thus this gives a section of the UCT quotient. F5 supplies the required choices when sections in all degrees are wanted. The Künneth splitting is supplied by the completed construction in F2. [F2, F4, F5, step 1.1]

3.1 For UCT nonnaturality use $C_1=\mathbb Za\oplus\mathbb Zb$, $C_0=\mathbb Zc$, $da=2c,db=0$, and $M=\mathbb Z/2$. Then $H_0C=\mathbb Z/2$, $H_1C=\mathbb Z$, and $H^1\operatorname{Hom}(C,M)=M^2$ because the incoming coboundary is $(2m,0)=0$. Evaluation is $(x,y)\mapsto y$ and its kernel is the first coordinate. The chain automorphism $a\mapsto a+b$, fixing $b,c$, fixes both homology groups but acts on $M^2$ by $(x,y)\mapsto(x+y,y)$. No lift $(x,1)$ of $1$ is fixed, so no section can be natural in $C$. F2 gives the corresponding tensor shear obstruction for Künneth. Zero filtration pieces may remove an individual extension problem, but cannot turn this counterexample into a natural splitting theorem. [F2, F4, step 2.2] ∎
