---
id: ex-normalized-haar-measure-on-a-finite-group
kind: example
title: Normalized Haar measure on a finite group
deps: [cor-normalized-haar-probability-on-a-compact-group, ex-counting-measure-as-haar-measure-on-a-discrete-group, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13
      url: https://www.math.stonybrook.edu/~aknapp/download/a2-1-realanal-clickable.pdf
proof_strategy: direct
---

## Example

Assume AC. For a finite group $G$ of order $m$, the normalized Haar probability is $\mu(E)=|E|/m$, and $\int f\,d\mu=m^{-1}\sum_{x\in G}f(x)$. It is invariant on both sides and under inversion.

## Facts & Assumptions

**Given:** A finite group of order $m\ge1$, with AC for the cited general uniqueness theorem.

[F1] A compact Hausdorff group has a unique normalized Haar probability under AC. ([[cor-normalized-haar-probability-on-a-compact-group]])

[F2] Counting measure on a discrete group is Haar and its integrals are finite sums. ([[ex-counting-measure-as-haar-measure-on-a-discrete-group]])

[A1] AC is assumed in the choice-function form stated in the cited definition; the explicit finite formula itself uses no choice. ([[def-axiom-of-choice]])

## Verification

**Proof technique:** direct.

1.1 With the discrete topology $G$ is compact and Hausdorff: its singleton sets are open, and finitely many of them cover $G$. Counting measure has total mass $m>0$, so dividing by $m$ gives the stated Haar probability by [F2]. Left multiplication, right multiplication and inversion each permute the $m$ summands; hence their pullbacks preserve the displayed average. Under the assumed AC, [F1] identifies this probability with the general normalized Haar probability. [F1, F2, A1]

2.1 For $G=C_3=\{1,a,a^2\}$, take $f(1)=0$, $f(a)=1$, $f(a^2)=5$. Then $\int f\,d\mu=(0+1+5)/3=2$. Left or right translation by $a$ and inversion only rearrange these three values, so their integrals remain $2$. For $m=1$ the formula is evaluation at the identity, and for $f=0$ it is zero. [step 1.1] ∎

## Sources

Knapp, Advanced Real Analysis, VI §2, pp.225–230, Lemmas 6.9–6.13. Local argument and conventions as displayed above.
