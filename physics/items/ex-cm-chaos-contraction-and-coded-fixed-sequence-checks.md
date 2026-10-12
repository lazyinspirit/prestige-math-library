---
id: ex-cm-chaos-contraction-and-coded-fixed-sequence-checks
kind: example
title: "Explicit constants at $a=100$: the contraction factor, the fixed points $r_\\pm$ and the constant-code solutions"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-bilateral-symbol-and-bounded-sequence-space, lem-coded-quadratic-recurrence-is-a-contraction, thm-of-square-roots, def-abs-value, lem-of-abs-value, def-integer-power]
dependency_roles:
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  lem-coded-quadratic-recurrence-is-a-contraction: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-integer-power: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 13.1, quadratic horseshoe maps and their invariant values"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 15 Section 15.2, the fixed points of the Hénon horseshoe"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
verification:
  precheck: pass
---

## Example

Take $a=100$ in [[lem-coded-quadratic-recurrence-is-a-contraction]], so that

$$R=\sqrt{100}+3=13,\qquad L=\sqrt{a-2R}=\sqrt{74},\qquad \sqrt{a+2R}=\sqrt{126}.$$

Then $126<169=13^2$, so $\sqrt{126}<R=13$; $74>1$, so $L>1$; and the contraction constant of $T_s$ on $B_{13}$ is

$$\frac1L=\frac1{\sqrt{74}}<1 .$$

The constant codes $\bar u$ ($u=\pm1$) are solved by the constant sequences $x_n=r_u$ with

$$11<r_+=1+\sqrt{101}<12,\qquad -10<r_-=1-\sqrt{101}<-9,$$

the two displayed bounds hold because $100<101<121$; and both satisfy the exact identity $r_u^2=100+2r_u$. Every coded sequence has $|x_n|\ge\sqrt{74}$, and its sign is the corresponding symbol.

## Facts & Assumptions

**Given:** The parameter $a=100$, the constants $R=13$, $L=\sqrt{74}$, and the numbers $r_\pm=1\pm\sqrt{101}$.

[L1] Model data ([[lem-coded-quadratic-recurrence-is-a-contraction]], [[def-bilateral-symbol-and-bounded-sequence-space]]): for $a\ge100$, $R=\sqrt a+3$, $L=\sqrt{a-2R}$, the operator $T_s$ is a contraction of $B_R$ with constant $1/L$; its unique fixed point satisfies $\operatorname{sign}x_n(s)=s_n$, $|x_n(s)|\ge L$ and $x_{n+1}(s)+x_{n-1}(s)=x_n(s)^2-a$.

[L2] Square roots and squares ([[thm-of-square-roots]], [[def-abs-value]], [[def-integer-power]], [[lem-of-abs-value]]): $13^2=169$, $(\sqrt{101})^2=101$, $\sqrt{74}>1$ because $74>1$, and $\sqrt{126}<13$ because $126<169$ and both sides are nonnegative.



## Verification

**Proof technique:** direct; evaluate the defining inequalities and identities at the explicit constants.

1.1 Endpoint inequality: $a+2R=100+26=126$ and $R^2=169$, so $a+2R<R^2$; by [L2] $\sqrt{126}<13=R$, which is the self-mapping inequality of [[lem-coded-quadratic-recurrence-is-a-contraction]]. Similarly $a-2R=100-26=74>1$, so $L=\sqrt{74}>1$ and $1/L<1$. [given, L2, algebra]

1.2 The fixed points: for $r_\pm=1\pm\sqrt{101}$ one has, using [L2], $$r_\pm^2=1\pm2\sqrt{101}+101=102\pm2\sqrt{101}=100+2(1\pm\sqrt{101})=100+2r_\pm .$$ Hence $(T_{\bar u}\tilde x)_n=u\sqrt{100+r_u+r_u}=u\sqrt{100+2r_u}=u\sqrt{r_u^2}=r_u$ by [L2] and $\operatorname{sign}r_u=u$, so the constant sequence $\tilde x_n=r_u$ is a fixed point of $T_{\bar u}$; by uniqueness it is $x(\bar u)$. [given, L1, L2, algebra]

2.1 Bounds: $|r_\pm|\ge\sqrt{101}-1>9>\sqrt{74}=L$ and $|r_\pm|<12<13=R$, consistent with the general bounds of [L1]; the strict bounds $9>\sqrt{74}$ and $\sqrt{101}<11$ follow from $74<81$ and $101<121$. [given, step 1.2, L1, L2, algebra] ∎


## Remarks

- All verifications are exact algebraic identities involving $\sqrt{101}$, $\sqrt{74}$ and $\sqrt{126}$, with rational comparisons for the inequalities; no numerical integration, simulation or measurement is involved.
