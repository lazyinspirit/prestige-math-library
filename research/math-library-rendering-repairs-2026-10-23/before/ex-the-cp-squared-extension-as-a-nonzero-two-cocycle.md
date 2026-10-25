---
id: ex-the-cp-squared-extension-as-a-nonzero-two-cocycle
kind: example
title: "The C_p^2 extension as a nonzero two-cocycle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-an-extension-determines-a-well-defined-h-two-class, def-second-cohomology-by-factor-sets]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Example

For every integer $p\ge2$, the nonsplit extension

$$0\to C_p\to C_{p^2}\to C_p\to0$$

with trivial action on the kernel, a normalized section yields the cocycle

$$f(i,j)=\begin{cases}0,& i+j<p,\\1,& i+j\ge p,\end{cases}$$

for $0\le i,j<p$. This cocycle is nonzero in $H^2(C_p,C_p)$.

## Facts & Assumptions

**Given:** An integer $p\ge2$, the quotient map $\mathbb Z/p^2\mathbb Z\to\mathbb Z/p\mathbb Z$, and the normalized section $s(i)=i$ for $0\le i<p$.

[L1] An extension determines a well-defined class in $H^2$ ([[cor-an-extension-determines-a-well-defined-h-two-class]]).

[L2] The zero class in $H^2(C_p,C_p)$ consists of two-coboundaries, with trivial-action coboundary $\delta b(i,j)=b(i)+b(j)-b(i+j)$ ([[def-second-cohomology-by-factor-sets]]).

## Verification

**Proof technique:** direct.

1.1 In $\mathbb Z/p^2\mathbb Z$, adding two chosen lifts $i$ and $j$ either stays below $p$ or crosses the first multiple of $p$. Therefore $$s(i)+s(j)-s(i+j\bmod p)=pf(i,j),$$ with $f(i,j)$ given by the carry function above. [given, algebra]

2.1 The kernel is central, so [L1] identifies the carry function with the extension class. If $[f]=0$, [L2] gives a normalized cochain $b:C_p\to C_p$ with $f=\delta b$. Subtract the kernel element $p b(i)$ from each chosen lift: $s'(i)=s(i)-p b(i)\in C_{p^2}$. Its factor set is $f-\delta b=0$, so $s'$ is a group-homomorphic section of the quotient. But $s'(1)$ would have order dividing $p$ and map to $1\in C_p$; every element of $C_{p^2}$ killed by $p$ lies in the kernel $pC_{p^2}$ and maps to $0$. This contradiction shows $[f]\ne0$ without any global Choice premise. [L1, L2, step 1.1, algebra]

3.1 Hence the displayed cocycle represents a nonzero class in $H^2(C_p,C_p)$. [step 2.1] ∎
