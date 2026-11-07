---
id: thm-level-three-torsion-frames-trivialize-positive-tensor-monodromy
kind: theorem
title: "Level-three torsion frames trivialize positive tensor monodromy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [lem-multiplication-by-n-on-abelian-scheme, thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets, lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations, thm-complex-abelian-variety-uniformizes-as-complex-torus, thm-holomorphic-implicit-function-theorem, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-fundamental-theorem-for-nonautonomous-smooth-odes, thm-smooth-dependence-of-ode-solutions-on-parameters, def-axiom-of-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification: {}
---

## Statement

Assume AC and DC. Let $A\to S$ be an abelian scheme over a smooth connected complex algebraic variety, and suppose the morphism is projective. Let $M$ be the integral local system $R_1\pi^{\mathrm{an}}_*\mathbb Z$ modulo torsion, and let $T(M)$ be a finite direct sum of tensor products of $M$ and $M^*$. Suppose $L\subseteq T(M)$ is a saturated local subsystem and has a monodromy-invariant positive-definite real bilinear form.

There is a connected finite étale cover $S'\to S$, obtained as a connected component of the frame cover of $A[3]$, on which $L$ is constant. The cover and the result are compatible with any specified algebraic endomorphisms of $A/S$; their existence does not require an étale–Betti cohomology comparison theorem.

This statement does not construct the positive form or compare higher Betti, de Rham and étale cohomology.

## Facts & Assumptions

**Given:** AC, DC, the abelian scheme, integral local systems, saturated subsystem and invariant positive form in the Statement.

[F1] For an abelian scheme, multiplication by $3$ has finite étale kernel of rank $3^{2g}$; finite étale covers of a connected base are equivalent to finite continuous fundamental-group sets ([[lem-multiplication-by-n-on-abelian-scheme]], [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]).

[F2] A smooth projective family has finite-rank integral cohomology local systems; each complex abelian variety is a complex torus ([[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]], [[thm-complex-abelian-variety-uniformizes-as-complex-torus]]).

[F3] An invertible holomorphic Jacobian gives local analytic coordinates; smooth partitions of unity and local smooth ODE existence and parameter dependence are available ([[thm-holomorphic-implicit-function-theorem]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-fundamental-theorem-for-nonautonomous-smooth-odes]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

## Proof

**Proof technique:** identify torsion with the period lattice modulo three, then use positivity and a torsion-free congruence subgroup.

1.1 By [F1], $A[3]\to S$ is finite étale. By [F2], a geometric fibre is a complex torus $V/\Lambda$, whose $3$-torsion is canonically $\tfrac13\Lambda/\Lambda\cong\Lambda/3\Lambda\cong(\mathbb Z/3)^{2g}$. The finite set of ordered bases of this fibre is acted on continuously by the étale fundamental group. By [F1] it is represented by a finite étale cover $P\to S$; it is nonempty and its pullback trivializes $A[3]$. Choose a connected component $S'$ of $P$. A nonempty component of a finite étale cover of connected $S$ maps both openly and closedly to $S$, hence surjects. It is smooth and connected over $\mathbb C$, and its pullback still trivializes $A[3]$. [F1, F2, given, choose, construct, algebra]

1.2 The image of monodromy on $L$ is finite. Indeed a positive-definite form bounds the Euclidean lengths of the images of a chosen lattice basis, and only finitely many lattice vectors have bounded length. Also, if $B$ is a finite-order integral matrix congruent to $I$ modulo $3$, then $B=I$: otherwise replace $B$ by a power of prime order $p$ and write $B=I+3^kC$, $k\ge1$, with $C$ not all divisible by $3$. For $p\ne3$, the binomial expansion modulo $3^{k+1}$ contradicts $B^p=I$. For $p=3$, expansion modulo $3^{k+2}$ gives $B^3\equiv I+3^{k+1}C$, again a contradiction. [given, choose, construct, algebra]

2.1 We identify the analytic local system $A[3]^{\mathrm{an}}$ with $M/3M$ without using cohomology comparison. For a point $x$ of order dividing $3$ on a torus, choose a path $\gamma$ from $0$ to $x$ and take the homology class of the loop $3\gamma$, modulo $3$. Changing $\gamma$ changes this class by $3$ times a loop. In the uniformization $V/\Lambda$, lifting $\gamma$ ends at $\lambda/3$ for a unique class $\lambda\bmod3\Lambda$, so the resulting map is the standard isomorphism $A[3]\cong H_1(A,\mathbb Z)/3$. It is natural under group homomorphisms. It also commutes with transport along the base: a local smooth trivialization can be built by patching local right inverses to the differential with the partitions of unity in [F3] and lifting radial base paths by the resulting horizontal vector fields. Properness keeps those lifts in a compact set, and the ODE existence and smooth-dependence statements in [F3] give the trivialization. Translate it fibrewise to fix zero; a nearby torsion point can be joined to the transported endpoint by a short path. The resulting loops vary continuously, so their integral homology classes are locally constant. By [F3] and finiteness, the analytification of $A[3]\to S$ is a topological covering. Thus the fibrewise isomorphisms form an isomorphism of local systems. In particular the monodromy of $M$ on $S'$ is the identity modulo $3$. [F1, F2, F3, given, step 1.1, construct, algebra]

3.1 On $S'$, step 2.1 makes monodromy on $M$ congruent to the identity modulo $3$. The same is true on $M^*$, all tensor products and their finite direct sums. For $v\in L$, write $(\gamma-1)v=3w$ with $w\in T(M)$; stability and saturation imply $w\in L$. Thus monodromy on $L$ is congruent to the identity modulo $3$. Its image is finite by step 1.2, so the torsion-free congruence calculation there makes it trivial. A local system with trivial monodromy is constant. The constructions of $A[3]$, paths and the homology identification commute with algebraic group endomorphisms, giving the final naturality assertion. No comparison of étale cohomology with Betti cohomology was used. [given, step 2.1, step 1.2, construct, algebra] ∎

## Boundary

The invariant positive form and the saturated subsystem are hypotheses. Relative cohomology comparison and the propagation of absolute-Hodge classes remain separate prerequisites.
