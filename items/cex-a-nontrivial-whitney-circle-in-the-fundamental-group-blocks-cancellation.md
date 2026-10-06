---
id: cex-a-nontrivial-whitney-circle-in-the-fundamental-group-blocks-cancellation
kind: counterexample
title: A nontrivial Whitney circle in the fundamental group blocks cancellation
deps:
- lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle
- def-whitney-circle-for-a-pair-of-intersection-points
- lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points
- lem-metastable-embedding-for-maps-from-a-compact-manifold
- def-oriented-intersection-number
- def-local-oriented-intersection-sign
- def-based-loops-and-fundamental-group
- def-simply-connected
- thm-higher-dimensional-spheres-are-simply-connected
- thm-seifert-van-kampen
- thm-strong-whitney-approximation-by-transverse-maps
- thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
- def-countable-choice
- thm-fundamental-group-of-a-product
- thm-fundamental-group-of-the-circle
- lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
- thm-smooth-dependence-of-ode-solutions-on-parameters
- thm-weak-whitney-proper-embedding-theorem
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Definition 7.13 (pi-trivial maps), Definitions 7.18 and 7.20, printed pp. 131–135; Theorem 7.27 and
      proof, printed pp. 138–140. Supports the label obstruction, not the newly constructed winding-tube example.
  - title: John Milnor, Lectures on the h-Cobordism Theorem
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: 'Theorem 6.6, printed p. 71: the concatenated loop must be contractible. Supports the required hypothesis,
      not the winding-tube construction.'
generation:
  role: counterexample
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 2
verification:
  precheck: pass
---

## Statement refuted

"Two closed connected oriented complementary submanifolds meeting in exactly two opposite-sign points always admit a Whitney move cancelling the pair."

## Facts & Assumptions

[F1] Seifert–van Kampen identifies the fundamental group with a group pushout. [[thm-seifert-van-kampen]]

[F2] $S^n$ is simply connected for every $n\ge2$. [[thm-higher-dimensional-spheres-are-simply-connected]]

[F3] $\pi_1(X\times Y,(x_0,y_0))\cong\pi_1(X,x_0)\times\pi_1(Y,y_0)$. [[thm-fundamental-group-of-a-product]]

[F4] $\operatorname{Deg}:\pi_1(\mathbb R/\mathbb Z,[0])\to(\mathbb Z,+)$ is an isomorphism. [[thm-fundamental-group-of-the-circle]]

[F5] Metastable approximation of maps by embeddings. [[lem-metastable-embedding-for-maps-from-a-compact-manifold]]

[F6] Strong Whitney approximation by transverse maps. [[thm-strong-whitney-approximation-by-transverse-maps]]

[F7] A smooth embedded submanifold has a normal tubular neighbourhood under Countable Choice. [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]

[F8] A linear matrix initial-value problem with continuous coefficients has a unique solution on the prescribed compact interval. [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]

[F9] Jointly smooth finite-dimensional ODE coefficients give smooth local solution dependence on parameters; uniqueness permits composition along a compact solution interval. [[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[F10] The Whitney circle contracts exactly when its based loop class is trivial; compatible whiskers compare the two intersection labels by that class. [[lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle]]

## Counterexample


Assume $\mathrm{AC}_\omega$ for the smooth approximation and tubular-neighbourhood suppliers used below. There are embedded oriented spheres $A,B\cong S^3$ in the closed oriented manifold $X=(S^3\times S^3)\#(S^1\times S^5)$ with $\pi_1(X)=\langle t\rangle\cong\mathbb Z$, such that $A\cap B=\{p,q\}$ transversely with signs $+1,-1$, while every admissible Whitney circle for the ordered pair $(p,q)$ represents $t\ne1$ (after fixing the generator convention). Construct $A=S^3\times\{y_0\}$ in the product summand. Take two parallel spheres $C_i=\{x_i\}\times S^3$, give $C_1$ its product orientation and $C_2$ the opposite orientation, and join them away from $A$ by an oriented tube whose core winds once through the $S^1\times S^5$ summand. The connected sum $B=C_1\#(-C_2)$ is an embedded $S^3$. Its only intersections with $A$ are $p=(x_1,y_0)$ and $q=(x_2,y_0)$. With whiskers normalized at $p$, their group labels are $1,t$, so their equivariant indices are $1,-t$ in $\mathbb Z[t,t^{-1}]$. The integer intersection is $1-1=0$, but no Whitney circle bounds even a continuous disk. Both sheets are simply connected, so their inclusions are $\pi_1$-trivial and the group labels are well-defined independently of paths in the sheets. Thus opposite signs and vanishing integer intersection do not supply the Whitney move in a nonsimply-connected ambient manifold.

**Given:** The product $S^3\times S^3$, distinct nearby $x_1,x_2$ in its first factor, $y_0$ in its second factor, and $\mathrm{AC}_\omega$ for the cited smooth suppliers.

1.1 Form $X$ by removing a small $6$-ball disjoint from $A=S^3\times\{y_0\}$ and $C_1\cup C_2$ in the product, removing a ball from $S^1\times S^5$, and identifying their boundary $5$-spheres by an orientation-reversing diffeomorphism. This explicitly defines the smooth oriented connected sum. Removing either ball does not change the fundamental group: apply van Kampen to the punctured manifold and the ball, with collar overlap homotopy equivalent to the simply connected $S^5$. The same theorem across the neck gives $\pi_1(X)=1*\mathbb Z=\mathbb Z$. Here $S^3,S^5$ are simply connected, and projection of $S^1\times S^5$ onto $S^1$ gives its fundamental group: a based loop is a pair of coordinate loops; the second contracts because $S^5$ is simply connected, while the first lifts to $\mathbb R$ and its integer endpoint displacement classifies based homotopy. Choose its generator orientation below. [given, construct, F1, F2, F3, F4]

2.1 Choose small $3$-balls $D_i\subset C_i$ away from $A$ and paths in $C_i$ from their centres $u_i$ to $p$ or $q$, respectively. Fix an embedded arc $\alpha$ in $A$ from $p$ to $q$. A reference arc from $u_2$ to $u_1$ in the product, otherwise missing $A,C_1,C_2$, can be chosen in product coordinates; the loop obtained by adjoining the fixed sheet paths and $\alpha$ is null-homotopic since the product is simply connected. Replace a short segment of this reference arc by a detour through the connected-sum neck, around one generator of the $S^1$ factor, and back through the neck. Two parallel lanes make the outward and return portions disjoint. More formally, relative endpoint smoothing followed by the compact-arc embedding supplier gives an embedded representative of this path class; make its interior transverse to each of the three $3$-dimensional sheets, keeping short fixed endpoint collars normal to $C_i$. Since $1+3-6=-2$, its interior misses every sheet. Finitely many compactly supported perturbations suffice and preserve its relative path class and embeddedness. Denote the resulting embedded core arc by $\eta:u_2\to u_1$. By the construction, closing $\eta$ using the fixed sheet paths and $\alpha$ gives the generator $t$, not a null loop. [construct, step 1.1, F5, F6]

3.1 A sufficiently thin tubular neighbourhood of $\eta$ is $I\times D^5$: its normal bundle is trivial by projecting onto it in a Euclidean ambient embedding and transporting an initial basis by the skew matrix ODE $U'= [P',P]U$ along the interval. Choose a rank-$3$ subbundle in that normal bundle agreeing with the tangent $3$-planes of $C_i$ at its endpoints. Such a choice exists because the space of $3$-planes in $\mathbb R^5$ is path-connected; endpoint frames can be joined and interpolated on the interval. The resulting $I\times D^3$ has end balls $D_i$ after shrinking and straightening in endpoint charts. Remove their interiors from $C_1\cup C_2$ and insert the lateral cylinder $I\times S^2$, rounding its corners. Use the gluing that extends the specified orientations $C_1,-C_2$; an endpoint reflection realizes the required orientation convention. The tube and all rounding lie away from $A$ and the rest of the sheets. Each punctured $C_i$ is a $3$-ball, and two such balls joined by $S^2\times I$ form $S^3$. Thus the result is an embedded oriented sphere $B$; it agrees with $C_1$ near $p$ and with $-C_2$ near $q$. Their product tangent spaces are complementary to $TA$, so the only intersections are $p,q$ with signs $+1,-1$. [construct, step 2.1, F7, F8, F9]

4.1 Take an embedded arc $\beta$ in $B$ from $q$ to $p$ running through the tube. Its part in the tube is homotopic relative endpoints to its core $\eta$ inside the tubular neighbourhood; its end parts are the fixed sheet paths up to homotopy in the punctured spheres. Consequently $[\alpha*\beta]=t$ by step 2.1. Any other paths with the same endpoints in $A$ and $B$ are homotopic relative endpoints to these, since both sheets are $S^3$. In particular every admissible arc system gives the same nontrivial class. Normalize the label at $p$ to $1$; the label comparison lemma then gives the other label $t$, up to replacing the generator by its inverse under the opposite convention. The indices $1,-t$ are not negatives of each other, although their augmentation is zero. A disk filling a Whitney circle would contract $t$, impossible. Hence no Whitney disk or Whitney move exists for this pair. [step 1.1, step 3.1, step 2.1, construct, F10] ∎
