---
id: ex-central-extensions-of-a-cyclic-group
kind: example
title: "Central extensions of a cyclic group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-axiom-of-choice, def-external-direct-product-of-groups, def-quotient-group, cor-central-extensions-are-classified-by-h-two-with-trivial-action]
proof_strategy: direct
verification:
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $n\ge1$, let $G=C_n=\langle x\rangle$, and let $A$ be an abelian group with trivial
$C_n$-action. A central extension class is represented by a relation

$$\widetilde x^n=a\in A,$$

and changing the lift $\widetilde x$ by $b\in A$ changes $a$ to $a+nb$.
Hence the extension classes are parametrized by $A/nA$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $n\ge1$, a cyclic quotient $C_n=\langle x\rangle$, and a trivial-action abelian kernel $A$.

[L1] Under the assumed Axiom of Choice, central extensions are classified by $H^2(C_n,A)$ ([[cor-central-extensions-are-classified-by-h-two-with-trivial-action]]).

[F2] The product $A\times\mathbb Z$ is a group and a normal subgroup has a quotient group ([[def-external-direct-product-of-groups]], [[def-quotient-group]]).

## Verification

**Proof technique:** direct.

1.1 In any central extension, choose a lift $\widetilde x$ of the generator $x$. Since the quotient has order $n$, the element $\widetilde x^n$ lies in the central kernel $A$; write it as $a\in A$. For every $a\in A$, construct
$$E_a=(A\times\mathbb Z)/\langle(-a,n)\rangle.$$
The subgroup in the denominator is normal because $A\times\mathbb Z$ is abelian. The map $A\to E_a$, $b\mapsto[(b,0)]$, is injective: if $(b,0)=k(-a,n)$ then $kn=0$, hence $k=0$ and $b=0$. The map $E_a\to C_n$, $[(b,m)]\mapsto x^{m}$, is well defined and surjective, with kernel precisely the image of $A$; if $m=kn$, then $[(b,m)]=[(b+ka,0)]$. Thus $E_a$ is a central extension, and its distinguished lift $[(0,1)]$ has $n$th power $[(a,0)]$. [F2, given, construct, algebra]

2.1 The homomorphism $A\times\mathbb Z\to E$ defined by $(b,m)\mapsto b\widetilde x^m$ is onto: an element of $E$ has quotient $x^m$, so differs from $\widetilde x^m$ by an element of $A$. Its kernel is exactly $\langle(-a,n)\rangle$: a kernel element has $m=kn$, and then $b\widetilde x^{kn}=b+ka=0$ in the embedded kernel. Therefore it descends to an extension equivalence $E_a\cong E$. Every central extension in the example is realized by one of the $E_a$. [step 1.1, given, algebra]

3.1 Replacing $\widetilde x$ by $b\widetilde x$ changes its $n$th power from $a$ to $a+nb$ because $A$ is central. Conversely, if $a'=a+nb$, sending the distinguished lift $[(0,1)]\in E_{a'}$ to $[(b,1)]\in E_a$ and fixing $A$ defines an extension equivalence: the new lift has $n$th power $a+nb=a'$. Hence two parameters define equivalent extensions exactly when they differ by an element of $nA$. [step 1.1, step 2.1, algebra]

4.1 Steps 1.1--3.1 identify the extension classes with $A/nA$. Under the stated Choice premise, [L1] identifies those same classes with $H^2(C_n,A)$, giving the claimed cohomological description. [L1, step 1.1, step 2.1, step 3.1] ∎
