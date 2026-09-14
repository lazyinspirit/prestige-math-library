---
id: thm-second-lie-algebra-cohomology-classifies-abelian-extensions
kind: theorem
title: Second cohomology classifies abelian extensions
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lie-algebra-cohomology, def-chevalley-eilenberg-differential, def-semidirect-product-of-lie-algebras]
landmark: false
proof_strategy: construction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, Exercise 7.7.5"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.7, Exercise 7.7.5 and §7.6 extension discussion, printed pp. 237 and 241"
---

## Statement

Let $\mathfrak g$ be finite-dimensional and fix a $\mathfrak g$-module $M$.
Then $H^2(\mathfrak g,M)$ is naturally in bijection with equivalence classes
of extensions

$$0\longrightarrow M\longrightarrow\mathfrak e\longrightarrow\mathfrak g\longrightarrow0$$

whose kernel is abelian and whose induced action on it is the specified
module action. The zero class corresponds exactly to split extensions.

## Facts & Assumptions

**Given:** A finite-dimensional $\mathfrak g$, a fixed module $M$, and
extension equivalences that are the identity on $M$ and $\mathfrak g$.

[L1] The degree-two CE cocycle and coboundary formulas are those of
[[def-chevalley-eilenberg-differential]].

[L2] Their quotient is $H^2(\mathfrak g,M)$
([[def-lie-algebra-cohomology]]).

[L3] The zero cocycle gives the semidirect-product bracket
([[def-semidirect-product-of-lie-algebras]]).

## Proof

**Proof technique:** mutually inverse constructions.

1.1 Given an extension, lift a finite basis of $\mathfrak g$ and extend linearly to a section $s:\mathfrak g\to\mathfrak e$. The formula $x\cdot m=[s(x),m]$ is independent of the lift because $M$ is abelian, and it is the fixed action. Define $\omega_s(x,y)=[s(x),s(y)]-s([x,y])\in M$. It is alternating. Expanding Jacobi for the three lifts and collecting their $M$-components gives exactly $d\omega_s=0$ with [L1]'s signs. [L1, algebra]
1.2 Conversely, for a $2$-cocycle $\omega$, put on $M\oplus\mathfrak g$ the bracket $[(m,x),(n,y)]=(x n-y m+\omega(x,y),[x,y])$. Alternation is immediate. The $\mathfrak g$-component of Jacobi vanishes by Jacobi in $\mathfrak g$; the $M$-component is precisely $d\omega$, so it vanishes. Thus this is an extension inducing the fixed action. Replacing $\omega$ by $\omega+dt$ gives the equivalent extension through $(m,x)\mapsto(m-t(x),x)$. [L1, algebra]
2.1 A second section is $s'=s+t$ for a linear map $t:\mathfrak g\to M$. Since $M$ is abelian, direct expansion gives $\omega_{s'}=\omega_s+dt$. Hence the class $[\omega_s]$ is independent of the finite-basis section and is preserved by extension equivalences. [L1, step 1.1]
3.1 Starting from an extension, the map $(m,x)\mapsto m+s(x)$ identifies the construction in step 1.2 with the original extension; starting from a cocycle recovers it from the canonical section. These operations are inverse on equivalence classes. Finally, $[\omega]=0$ exactly when a section change makes $\omega$ zero, and then the section is a Lie homomorphism; by [L3] this is exactly a split extension. If $\mathfrak g=0$ or $M=0$, the constructions reduce to the unique zero class and the evident split extension. [L2, L3, step 1.2, step 2.1] ∎
