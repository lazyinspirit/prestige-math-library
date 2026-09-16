---
id: thm-obstruction-theory-for-lifting-through-a-fibration
kind: theorem
title: Obstruction theory for lifting through a fibration
status: published
origin: pipeline
deps: ["def-hurewicz-and-serre-fibrations", "prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace", "prop-higher-homotopy-basepoint-transport-and-moving-homotopies", "thm-the-primary-obstruction-cochain-is-a-cocycle", "thm-the-primary-obstruction-class-is-independent-of-cellular-choices", "thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton", "thm-numerable-fiber-bundles-are-hurewicz-fibrations", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Section 7.10 and Theorem 7.37, printed pages 189--191
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lectures 12 and 15, printed pages 41--42 and 48--50
---

## Statement

Assume AC and $n\geq1$. Let $p:E\to B$ be a Serre fibration with path-connected simple fiber $F$, let $(X,A)$ be a relative CW complex, and let $f:X\to B$. If a lift

$$ g:X^n\cup A\longrightarrow E,\qquad pg=f|_{X^n\cup A}, $$

has been fixed, then its next obstruction is a canonical class

$$ o_{n+1}(g)\in H^{n+1}(X,A;f^*\Pi_nF). $$

Here $f^*\Pi_nF$ is the local system obtained by transporting $\pi_n$ of the fibers along $f$; “simple” means that the change-of-basepoint action inside a fiber is trivial in the degree used. The class vanishes if and only if, after changing $g$ on the relative $n$-cells rel $X^{n-1}\cup A$, the lift extends over $X^{n+1}\cup A$.

If $\pi_i(F)=0$ for $i<n$, the lift through $X^n\cup A$ exists whenever the lower relative lifting problem has been solved, and the displayed class is the choice-independent primary obstruction. A numerable fiber bundle satisfies the fibration hypothesis by the published numerable-bundle theorem. For finite relative cell sets, only finite choice is used.

## Facts & Assumptions

[F1] The pullback construction identifies lifts of $f$ with sections of $q:f^*E\to X$ ([[def-hurewicz-and-serre-fibrations]]).

[F2] [[prop-a-fibration-has-path-lifting-and-homotopy-lifting-relative-to-a-subspace]] supplies relative lifting for the finite CW pairs $S^n\times I$ and their cubical prisms in a Serre fibration. [[prop-higher-homotopy-basepoint-transport-and-moving-homotopies]] supplies the endpoint-path correction on based $\pi_n$. The varying-fiber local system is constructed in Step 1.2 below; the fixed-target system for a map into one space is not being used as its source.

[F3] For one relative $(n+1)$-cell, the lifted attaching sphere determines an element of the transported $\pi_n(F)$, and it is zero exactly when the section extends across that disk.

[F4] In ordinary primary obstruction theory the signed cellular incidence calculation gives $\delta\theta=0$ ([[thm-the-primary-obstruction-cochain-is-a-cocycle]]).

[F5] The ordinary prism calculation gives $\delta d=\theta(s_0)-\theta(s_1)$ ([[thm-the-primary-obstruction-class-is-independent-of-cellular-choices]]).

[F6] The ordinary realization theorem changes an $n$-stage map on each relative $n$-cell, keeping the prior skeleton fixed, by inserting prescribed sphere representatives; it expressly does not claim a homotopy on the $n$-skeleton ([[thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton]]).

[A1] AC is used only for simultaneous representatives and lift extensions over arbitrary cell families ([[def-axiom-of-choice]]).

## Proof

**Given:** $p$, $(X,A)$, $f$, $g$, and [A1] as in the statement.

1.1 Form $f^*E=\{(x,e):f(x)=p(e)\}$ with projection $q(x,e)=x$. The map $g$ corresponds to the section $s(x)=(x,g(x))$, and conversely a section has second coordinate a lift. Pullbacks preserve the Serre lifting property. [F1]

1.2 Construct the coefficient system for the varying fibers. For a base path $\gamma:b\to c$ and a chosen lift $\widetilde\gamma$ beginning at $e\in F_b$ and ending at $e'\in F_c$, lift the constant-in-the-sphere-coordinate homotopy $\gamma$ on $S^n\times I$, prescribed on $S^n\times\{0\}\cup\{*\}\times I$ by a based sphere map $a:S^n\to F_b$ and $\widetilde\gamma$. The top face gives a based sphere map into $(F_c,e')$. Relative lifting on a second parameter cube shows that homotopic based sphere representatives give homotopic top faces, while lifting the two halves of the cubical concatenation and comparing along their common face shows preservation of the $\pi_n$ group law. Reversing $\gamma$ gives an inverse up to the based retracing-prism homotopy, so this is an isomorphism $\pi_n(F_b,e)\to\pi_n(F_c,e')$. The same relative lifting on a square compares two path lifts and an endpoint-fixed homotopy of base paths; the top edge of that square is a path between their endpoint basepoints in $F_c$. Correcting by its basepoint transport from [F2] makes the maps agree. A two-interval prism compares a concatenated path with successive transports. Because the fiber is simple in degree $n$, loops in a fiber act trivially on $\pi_n$, so the correction does not depend on the comparison edge; for $n=1$ this is precisely the stated abelian/trivial-conjugation condition. The resulting maps depend only on endpoint-fixed base-path classes, preserve composition, and are invertible. Consequently $b\mapsto\pi_n(F_b)$ is an abelian local system $\Pi_nF$ on the relevant base component, and pulling it back along $f$ gives the stated $f^*\Pi_nF$. This uses only finite cubical lifting for each supplied path; [A1] is needed later for simultaneous choices over arbitrary cells. [F2, A1]

2.1 Let $\phi:(D^{n+1},S^n)\to(X^{n+1}\cup A,X^n\cup A)$ be a characteristic map for the pullback section of Step 1.1. Contract $D^{n+1}$ to its center and lift that contraction along $q$ on the boundary section. The terminal boundary map lies in the fiber over the center and defines [F2, step 1.1]

$$ o_s(\phi)\in\pi_n(F_{\phi(0)}). $$

Reversing the contraction and applying the relative homotopy lifting property shows that a nullhomotopy of this sphere produces a section over $D^{n+1}$ agreeing with $s$ on $S^n$. Conversely, any such section supplies that nullhomotopy. This proves [F3], not merely one implication. [F2, F3]

3.1 Choose orientations, lifts of relative cells, and whiskers. Step 2.1 assigns a value to every relative $(n+1)$-cell. Replacing a whisker by a loop applies precisely the fiber-transport automorphism of [F2], while a deck translate applies the corresponding equivariance rule. The values therefore form a well-typed cellular cochain [F2, step 2.1]

$$ \theta_{n+1}(s)\in C^{n+1}(X,A;f^*\Pi_nF). $$

[F2, step 2.1]

4.1 Evaluate the cochain of Step 3.1 on the boundary of one relative $(n+2)$-cell. Pull everything back to its characteristic disk. Lifting its radial contraction identifies all boundary fiber groups, and the signed incidence sum is the boundary of the single lifted sphere datum on that disk. It is zero in $\pi_n(F)$ because a boundary is null in the relative homotopy exact sequence. Undoing the transports restores exactly the local-coefficient incidence formula. Hence $\delta\theta_{n+1}(s)=0$. [F2, F4, step 3.1]

5.1 A different cellular contraction, whisker, or partial section gives a fiberwise prism. Applying the signed boundary calculation of Step 4.1 to that prism yields the identity recorded in : [F5]

$$ \delta d(s_0,H,s_1)=\theta_{n+1}(s_0)-\theta_{n+1}(s_1). $$

Thus $o_{n+1}(g)=[\theta_{n+1}(s)]$ is independent of those choices while the preceding-stage lift is fixed up to homotopy. [F5, step 4.1]

6.1 If the class from Step 5.1 is zero, write $\theta_{n+1}(s)=\delta d$. On a relative $n$-cell, lift a contraction of its base disk to transport the given section to a map into the center fiber. Apply the relative pinch construction of [F6] there, inserting a signed sphere representative of $d(e^n)$ while fixing the boundary. Lift the reversed contraction relative to the boundary; the resulting map is again a section over the cell and agrees with $s$ on $X^{n-1}\cup A$. AC chooses the sphere representatives and relative lifts simultaneously over all cells. The fiberwise prism calculation of Step 5.1 then gives $\theta_{n+1}(s_d)=\theta_{n+1}(s)-\delta d=0$. Step 2.1 extends $s_d$ over every relative $(n+1)$-cell, and the CW pushout glues the extensions. Conversely, an extended section has zero cell values, so its class, and hence the class of the original partial lift, is zero. [A1, F3, F5, F6, step 2.1, step 5.1]

7.1 If $\pi_i(F)=0$ for $i<n$, every earlier cell obstruction group is zero. Induction gives a lift through the $n$-skeleton, and the same prism identity shows that any two such lifts have the same primary class. If the original map is a numerable bundle projection, the published theorem makes it a Hurewicz and therefore a Serre fibration, so all preceding steps apply. AC is confined to [A1], and finite cell families require only finite choice. $\square$ [A1, F2, F5, step 6.1]