---
id: ex-prikry-stems-and-direct-extensions
kind: example
title: Stems, direct extensions, and the generic sequence
status: draft
origin: pipeline
deps:
  - def-prikry-forcing-and-direct-extension
  - thm-prikry-generic-sequence-changes-cofinality
  - def-dense-open-sets-and-model-generic-filters
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

Let $M$ be a transitive model of ZFC containing a normal measure $U$ on an
uncountable cardinal $\kappa$, let $G$ be $M$-generic for the corresponding
Prikry forcing, choose $\alpha<\beta<\gamma<\kappa$, and put

$$A_\delta=\{\xi<\kappa:\delta<\xi\}.$$

Then

$$p=(\langle\alpha\rangle,A_\alpha),\qquad q=(\langle\alpha,\beta\rangle,A_\beta),\qquad r=(\langle\gamma\rangle,A_\gamma)$$

are Prikry conditions. The condition $q$ extends $p$ but is not a direct
extension; by contrast

$$p^*=(\langle\alpha\rangle,A_\beta)$$

is a direct extension of $p$. The conditions $p$ and $r$ are incompatible.
For a generic filter, the dense requirements on stem length and final height
make the union of its stems an increasing cofinal $\omega$-sequence in
$\kappa$.

## Facts & Assumptions

**Given:** $M,U,\kappa,G,\alpha,\beta,\gamma$ are as above, and conditions are ordered stronger-below.

[F1] [[def-prikry-forcing-and-direct-extension]]: Conditions have finite strictly increasing stems, upper parts in $U$, and extensions end-extend the old stem using points from its upper part; direct extensions keep the stem fixed.

[F2] [[thm-prikry-generic-sequence-changes-cofinality]]: In $M[G]$, the union of the stems in $G$ is a strictly increasing sequence of order type $\omega$ cofinal in $\kappa$.

[F3] [[def-dense-open-sets-and-model-generic-filters]]: An $M$-generic filter meets every dense subset of the forcing that belongs to $M$.

## Verification

1.1 Every tail $A_\delta$ belongs to $U$: its complement is the union of fewer than $\kappa$ singletons, while $U$ is nonprincipal and $\kappa$-complete. Its minimum is $\delta+1$. Hence $p,q,r,p^*$ satisfy the upper-part inequality in F1; in particular, $\alpha<\alpha+1$, $\beta<\beta+1$, and $\gamma<\gamma+1$. [F1]

1.2 If a condition extended both $p$ and $r$, its stem would end-extend both one-entry stems. Its first entry would then have to be both $\alpha$ and $\gamma$, contrary to $\alpha<\gamma$. Thus $p\perp r$. Notice that shrinking either upper part cannot repair this disagreement at the first stem entry. [F1]

1.3 For $n<\omega$, write $D_n=\{(s,A):|s|\ge n\}$. From a stem of length $m<n$, choose successively $n-m$ increasing points of its upper part and then shrink above the last chosen point; F1 shows that the resulting condition lies in $D_n$. Thus $D_n$ is dense. For $\eta<\kappa$, let $E_\eta$ consist of conditions with nonempty stem and last entry above $\eta$. Given $(s,A)$, the measure-one set $A$ is unbounded, so choose $\xi\in A$ above both $\eta$ and every entry of $s$, append $\xi$, and shrink the upper part to $A\cap A_\xi$. This gives an extension in $E_\eta$, so $E_\eta$ is dense. [F1]

2.1 The stem $\langle\alpha,\beta\rangle$ end-extends $\langle\alpha\rangle$, its new entry $\beta$ lies in $A_\alpha$, and $A_\beta\subseteq A_\alpha$. Thus $q\le p$. Their stems differ, so $q\not\le^*p$. On the other hand $p^*\le p$, $A_\beta\subseteq A_\alpha$, and the stems of $p^*$ and $p$ agree, so $p^*\le^*p$. [F1, step 1.1]

3.1 Each $D_n$ and $E_\eta$ is a member of $M$, because it is defined there from the ground forcing and the displayed ground parameters. By F3, $G$ meets every one of them. Meeting all $D_n$ makes the compatible stems have union of domain $\omega$, and meeting all $E_\eta$ makes that union unbounded in $\kappa$. Since extensions only end-extend strictly increasing stems, the union is a strictly increasing cofinal $\omega$-sequence, exactly as F2 asserts. [F2, F3, step 1.3] ∎
