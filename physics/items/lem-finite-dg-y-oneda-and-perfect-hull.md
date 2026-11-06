---
id: lem-finite-dg-y-oneda-and-perfect-hull
kind: lemma
title: The DG Yoneda embedding identifies the idempotent-completed finite twisted hull with perfect modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 1
deps:
  - def-stopped-fukaya-category-algebraic-conventions
  - def-differential-graded-module
  - def-axiom-of-choice
dependency_roles:
  def-stopped-fukaya-category-algebraic-conventions: mathematical-premise
  def-differential-graded-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Bernhard Keller, On differential graded categories
      url: https://arxiv.org/pdf/math/0601185v5
      locator: §§2.1–2.3 and 3.1, DG category, module and evaluation conventions; §3.5 for comparison with idempotent completeness. The splitting argument is supplied locally.
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lecture 7, representable modules and twisted complexes; the DG evaluation proof below is direct.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §1.5, module and wrapped-category conventions; no generation result is used.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Choice and let $k$ be a field. A **small strictly unital DG category** $\mathcal A$ has a set of objects, cochain complexes $\mathcal A(X,Y)$, closed degree-zero identities, and associative degree-zero composition with $d(ab)=(da)b+(-1)^{|a|}a\,db$, where $ab=a\circ b$. A **right DG module** $N$ consists of cochain complexes $N(X)$ and unital associative right actions $N(Y)\otimes\mathcal A(X,Y)\to N(X)$, written $na$, satisfying $d(na)=(dn)a+(-1)^{|n|}n\,da$. The degree-$q$ part of $\operatorname{Hom}_{\mathrm{Mod}-\mathcal A}(M,N)$ consists of families of degree-$q$ linear maps $F_X:M(X)\to N(X)$ satisfying $F_X(ma)=F_Y(m)a$; its differential is $dF=d_NF-(-1)^qFd_M$. Composition is ordinary composition. The homotopy category has these modules as objects and $H^0$ of these complexes as morphisms. Representables are $Y_X(Z)=\mathcal A(Z,X)$ with right action given by composition. Shifts use $M[r]^j=M^{j+r}$ and differential $(-1)^r d_M$. Cones use $\operatorname{Cone}(f)=N\oplus M[1]$ with $d(n,m)=(d_Nn+f(m),-d_Mm)$ for a closed degree-zero map $f:M\to N$. The finite twisted hull means the DG category obtained by finite sums, shifts and iterated cones, with full matrix morphism complexes and these differentials. Its idempotent completion at the level of the homotopy category has objects $(T,e)$ with $e^2=e\in H^0\operatorname{End}(T)$ and morphisms $a:(T,e)\to(U,f)$ satisfying $a=fae$. Perfect modules mean actual retracts in the module homotopy category of finite sums, shifts and iterated cones of representables.

For these conventions, for a right DG module $N$ and object $X$, evaluation at the identity is an isomorphism of cochain complexes
$$\operatorname{Hom}_{\mathrm{Mod}-\mathcal A}(Y_X,N)\cong N(X), \qquad Y_X=\operatorname{Hom}_{\mathcal A}(-,X).$$
Consequently the DG Yoneda functor is fully faithful on $\mathcal A$ and on its finite twisted hull. Passing to homotopy categories, it induces a fully faithful functor from the idempotent completion of that finite twisted hull to the homotopy category of right DG modules. Its essential image is the perfect-module category: the retracts, in that homotopy category, of finite iterated cones, shifts, and sums of representable modules. This statement concerns a strict DG enhancement; it does not strictify a merely homologically unital $A_\infty$-category.

## Statement references

[[def-stopped-fukaya-category-algebraic-conventions]]

[[def-differential-graded-module]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** AC and the DG category, right actions, Hom differential, cones and homotopy category explicitly defined in the Statement. All direct sums below are indexed by finite sets or the natural numbers.

[F1] [[def-differential-graded-module]] fixes the right-action Leibniz rule over a DGA. The Statement gives its object-labelled extension and defines the module Hom complex explicitly; these category-level structures are not claimed to follow from the DGA-only supplier.

[F2] [[def-stopped-fukaya-category-algebraic-conventions]] defines $Y_X=\operatorname{Hom}_{\mathcal A}(-,X)$, finite twisted objects, cones, shifts, retracts, and perfect modules.

[A1] Adopt AC as defined in [[def-axiom-of-choice]]. It is used to select representatives and primitives in products of cochain complexes, so that cohomology of their products is the product of cohomology.

## Proof

1.1 A degree-$q$ module map $F:Y_X\to N$ determines $n=F_X(1_X)\in N(X)^q$. Conversely define $F^n_Z(a)=na$. Associativity gives $F^n_Z(ab)=(na)b$, which is precisely the defined module compatibility. The differential calculation is $(dF^n)(a)=d(na)-(-1)^q n\,da=(dn)a=F^{dn}(a)$. Identities are closed, so evaluation also commutes with differentials. Unitality gives $F^n_X(1_X)=n$, and right linearity gives $F_Z(a)=F_X(1_X)a$. Thus evaluation and $n\mapsto F^n$ are inverse cochain maps. The Hom differential preserves right linearity: the two terms involving $da$ cancel by the same Leibniz calculation. [F1, given, construct, algebra]

1.2 To justify actual retract objects, let $C$ be a DG module and let $e\in H^0\operatorname{End}(C)$ satisfy $e^2=e$. Choose a closed representative $E$. Put $V=\bigoplus_{j\ge0}C$ and let $S:V\to V$ send the $j$-th summand to the $(j+1)$-st by $E$. Let $T=\operatorname{Cone}(1-S)$. For any module $N$, the defining Hom complex out of $V$ is the product of those out of $C$. By AC, products commute with cohomology: choose a closed representative in each coordinate for surjectivity and a primitive in each coordinate for injectivity. The long exact sequence of the Hom complex of this cone therefore identifies its adjacent maps, in each degree, with $L:(a_j)\mapsto(a_j-a_{j+1}e)$ on $\prod_{j\ge0}\operatorname{Hom}_{H}(C,N[n])$, where $H$ denotes the module homotopy category. This exact sequence follows by projecting the two-block cone Hom complex onto one block and taking kernels and boundaries. [A1, given, construct, algebra]

2.1 Taking $N=Y_Y$ gives
$$\operatorname{Hom}_{\mathrm{Mod}-\mathcal A}(Y_X,Y_Y) \cong Y_Y(X)=\operatorname{Hom}_{\mathcal A}(X,Y)$$
as cochain complexes, so Yoneda is fully faithful before passing to cohomology. [F1, F2, step 1.1, construct, algebra]

2.2 The map $L$ is onto: for prescribed $(b_j)$ set $a_j=b_j(1-e)-\sum_{h<j}b_he$. Then $a_j-a_{j+1}e=b_j$. Its kernel consists of the constant sequences $a_j=a$ with $ae=a$, since the kernel equations first imply $a_je=a_j$ and then $a_j=a_{j+1}$. Exactness in step 1.2 in two consecutive degrees gives a natural isomorphism $\operatorname{Hom}_H(T,N)\cong\{a:C\to N:ae=a\}$. Explicitly it is restriction along $i:C\to V\to T$ to the zeroth summand. In particular $ie=i$. Taking $N=C$ gives $p:T\to C$ with $pi=e$. Since $(ip)i=ie=i$, injectivity of the same restriction with $N=T$ gives $ip=1_T$. Thus every homotopy idempotent has an actual splitting module, without requiring a strictly idempotent chain representative. [step 1.2, construct, algebra]

3.1 For finite direct sums and shifts, representable modules and morphism complexes are the corresponding finite direct sums and shifted complexes, so the same comparison is blockwise the isomorphism in step 2.1. For a cone $T=\operatorname{Cone}(f:X\to Y)$, its morphism complex into or out of another finite twisted object is the two-block cone complex with differential given by the same matrix $f$; applying $Y_{(-)}$ gives that identical block complex of modules. Induction on the finite number of cone steps therefore preserves the cochain-level comparison for every pair of objects in the finite twisted hull. [F2, step 2.1, construct, algebra]

4.1 For two finite twisted objects, step 3.1 identifies the entire cohomology morphism spaces and preserves composition. For idempotents $e$ on $T$ and $f$ on $U$, it therefore identifies the corners $f\,H^0\operatorname{Hom}(T,U)\,e$. Step 2.2 supplies actual splitting modules for their images; morphisms between these splitting modules are exactly these corners, by composing with their inclusion and projection maps. This gives the claimed fully faithful extension from the idempotent completion. Its image consists precisely of retracts of finite cones, shifts and sums of representables, by the definition of perfect modules and the finite-hull comparison. No strictification of an $A_\infty$-category is used. [F2, step 3.1, step 2.2, construct, algebra] ∎

## Remarks

For the assigned geometry this lemma may be applied only after the operation/localization construction supplies a compatible strictly unital DG bar/history enhancement. It does not replace that construction and does not turn homological units into strict units.
