---
id: thm-cft-jacobson-morozov-for-nilpotent-elements
kind: theorem
title: Jacobson-Morozov triple for a nilpotent element
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
deps:
  - def-cft-finite-dimensional-simple-lie-algebra
  - def-cft-nilpotent-element-in-simple-lie-algebra
  - lem-finite-semisimple-cartan-root-and-string-structure
  - lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy
  - lem-finite-lie-triangularization-and-rank-one-complete-reducibility
dependency_roles:
  def-cft-finite-dimensional-simple-lie-algebra: mathematical-premise
  def-cft-nilpotent-element-in-simple-lie-algebra: mathematical-premise
  lem-finite-semisimple-cartan-root-and-string-structure: mathematical-premise
  lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy: mathematical-premise
  lem-finite-lie-triangularization-and-rank-one-complete-reducibility: mathematical-premise
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ana Balibanu, Geometry of Semisimple Lie Algebras, Part I
      url: https://www.math.lsu.edu/~ana/part1.pdf
      locator: §5, the full Jacobson-Morozov proof and its reductive-centralizer prerequisites.
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: Appendix D.3, Jacobson-Morozov and Dynkin grading conventions.
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

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra and let $f\in\mathfrak g$ be nilpotent in the adjoint representation. There exist $e,h\in\mathfrak g$ such that
$$[h,e]=2e,\qquad [h,f]=-2f,\qquad [e,f]=h.$$
The ordered triple $(e,h,f)$ is called an $\mathfrak{sl}_2$-triple.

## Facts & Assumptions

**Given:** A finite-dimensional complex simple Lie algebra and an element $f$ with $(\operatorname{ad}f)^N=0$ for some $N\ge1$.

[F1] [[def-cft-finite-dimensional-simple-lie-algebra]]: $\mathfrak g$ is finite-dimensional over $\mathbb C$ and has no nonzero proper ideals.

[F2] [[def-cft-nilpotent-element-in-simple-lie-algebra]]: nilpotence means nilpotence of $\operatorname{ad}f$ on $\mathfrak g$.

[F3] [[lem-finite-semisimple-cartan-root-and-string-structure]]: every maximal toral subalgebra has the stated root decomposition, one-dimensional root spaces, opposite-root pairings and normalized root triples. The Killing form is positive definite on the real coroot span; $H_\alpha$ is a nonzero real multiple of its coroot. The supplier also constructs the commuting internal Jordan parts $x=s+n$; if $x$ commutes with $f$, both parts commute with $f$.

[F4] [[lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy]]: the Killing form is invariant and nondegenerate on every finite-dimensional complex semisimple algebra. A Lie algebra of nilpotent endomorphisms is strictly triangularizable and solvable. If $L\subseteq\operatorname{End}(V)$ satisfies $\operatorname{tr}(xy)=0$ for $x\in[L,L]$, $y\in L$, then $L$ is solvable.

[F5] [[lem-finite-lie-triangularization-and-rank-one-complete-reducibility]]: every finite-dimensional representation of a solvable complex Lie algebra is simultaneously upper triangularizable.


## Proof

1.1 We first prove the missing centralizer reduction in any finite-dimensional complex semisimple algebra $\mathfrak a$. For a semisimple $s\in\mathfrak a$, extend the toral subalgebra $\mathbb Cs$ to a maximal toral subalgebra $\mathfrak t$: adjoining commuting semisimple elements preserves simultaneous diagonalizability, and dimensions bound the finite extension. Use [F3]'s root decomposition relative to this particular $\mathfrak t$. Set $\Psi=\{\alpha:\alpha(s)=0\}$, $T=\operatorname{span}_{\mathbb C}\{H_\alpha:\alpha\in\Psi\}$ and $Z=\{u\in\mathfrak t:\alpha(u)=0\text{ for every }\alpha\in\Psi\}$. The real span of these $H_\alpha$ lies in [F3]'s positive-definite real form, since each $H_\alpha$ is a nonzero real multiple of its coroot. Thus $B|_T$ is nondegenerate, $Z=T^{\perp}\cap\mathfrak t$, and $\mathfrak t=T\oplus Z$ with $B|_Z$ nondegenerate. Empty $\Psi$ gives $T=0$, $Z=\mathfrak t$. [F3, F4, given, algebra]

1.2 Every finite-dimensional complex semisimple algebra is a direct sum of simple ideals, as follows without a reductivity assumption. In a nonzero such algebra $\mathfrak a$, choose a nonzero ideal $I$ of minimal dimension. The radical of $B_{\mathfrak a}|_I$ is an ideal of $\mathfrak a$ by invariance, hence is $0$ or $I$. If it is $I$, then $B_I=0$: for $x,y\in I$, their adjoint actions on $\mathfrak a/I$ vanish, so the trace on $\mathfrak a$ equals the trace on $I$. The trace criterion [F4] makes $\operatorname{ad}_I(I)$ solvable; its central kernel then makes $I$ solvable by the derived series, contradicting semisimplicity. Thus $B_{\mathfrak a}|_I$ is nondegenerate. Its orthogonal complement is an ideal, and $\mathfrak a=I\oplus I^\perp$ is a sum of commuting ideals. Every ideal of $I$ is now an ideal of $\mathfrak a$, so minimality makes $I$ simple and nonabelian. The complement has no nonzero solvable ideal, since any such ideal would be an ideal of $\mathfrak a$. Repeating in decreasing dimension proves the claim, including the empty decomposition of zero. [F4, given, algebra]

2.1 The centralizer in step 1.1 is $\mathfrak l=\mathfrak a^s=\mathfrak t\oplus\bigoplus_{\alpha\in\Psi}\mathfrak a_\alpha$. Put $\mathfrak k=T\oplus\bigoplus_{\alpha\in\Psi}\mathfrak a_\alpha$. Root brackets show that $\mathfrak k$ is a subalgebra: sums of roots vanishing on $s$ again vanish on $s$, and opposite-root brackets lie in $\mathbb C H_\alpha\subseteq T$. Also $Z$ commutes with $\mathfrak l$, while each root vector belongs to $[\mathfrak k,\mathfrak k]$ by its nonzero bracket with its own coroot, and $T$ is spanned by opposite-root brackets. Consequently $\mathfrak l=Z\oplus\mathfrak k$ is a sum of commuting ideals, $[\mathfrak l,\mathfrak l]=\mathfrak k$, and $Z$ is exactly its center: any central element has zero root components and annihilates every root in $\Psi$. The decomposition is $B$-orthogonal. [F3, step 1.1, algebra]

3.1 The algebra $\mathfrak k$ is semisimple. Indeed let $R$ be any solvable ideal in it. The commuting diagonalizable actions of $T$ preserve $R$, so $R$ is a sum of their weight intersections; projections onto the finitely many joint weights are interpolation polynomials in a finite basis of $T$. The restricted weights $\alpha|_T$ for $\alpha\in\Psi$ are nonzero and pairwise distinct: if $\alpha|_T=\beta|_T$, then $H_\alpha-H_\beta\in T$ is orthogonal to $T$, hence zero, and thus $\alpha=\beta$; the same argument compares a root to zero. If $R$ has a nonzero root component, the root space is one-dimensional, so it contains a nonzero $e_\alpha$. Bracketing with $f_\alpha\in\mathfrak k$ puts $h_\alpha$ in $R$, and then bracketing with $f_\alpha$ puts $f_\alpha$ in $R$. This embeds the perfect three-dimensional root-triple algebra in the solvable algebra $R$, impossible since a subalgebra of a solvable algebra is solvable. Thus $R\subseteq T$. Ideality gives $[R,\mathfrak a_\alpha]\subseteq R$, forcing every $\alpha\in\Psi$ to vanish on $R$. Nondegeneracy on $T$ gives $R=0$. This proves semisimplicity; by step 1.2, $\mathfrak k$ is a direct sum of simple ideals. Thus $\mathfrak l$ is reductive in the explicit sense of a central abelian summand and a semisimple derived summand. [F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 If $f\in\mathfrak l$ has nilpotent adjoint action on $\mathfrak a$, then $f\in\mathfrak k$. For $z\in Z$, the operators $\operatorname{ad}f$ and $\operatorname{ad}z$ commute. Their product is nilpotent because $(\operatorname{ad}f\operatorname{ad}z)^N=(\operatorname{ad}f)^N(\operatorname{ad}z)^N=0$. Hence $B(f,z)=0$. Since $B(\mathfrak k,Z)=0$ and $B|_Z$ is nondegenerate, the $Z$ component of $f$ is zero. If $s\ne0$, its centralizer is proper: otherwise $s$ is central in the semisimple algebra, whose center is a solvable ideal and hence zero. Every simple ideal of $\mathfrak k$ then has dimension strictly less than $\dim\mathfrak a$. [F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 We now prove existence of the triple by strong induction on dimension for all finite-dimensional complex semisimple algebras. At dimension $d$, assume the assertion for every such algebra of dimension less than $d$. For $f=0$, use $e=h=0$, including the zero algebra. If the algebra has more than one simple ideal, step 1.2 and induction give triples in each smaller ideal; the projections of $f$ are nilpotent because the restricted adjoint actions are nilpotent. Their sums give the required relations, since distinct ideals commute. It therefore suffices at each dimension to treat a simple $\mathfrak g$ and $f\ne0$. If $\mathfrak g^f$ contains a nonnilpotent $x$, [F3]'s Jordan construction gives $x=s+n$ with nonzero semisimple $s$ commuting with $f$. Steps 1.1–4.1 put $f$ in the proper semisimple derived centralizer $\mathfrak k$. Its adjoint action on $\mathfrak k$ is the restriction of its nilpotent action on $\mathfrak g$. Induction in this smaller semisimple algebra supplies the triple in $\mathfrak k\subseteq\mathfrak g$. [F1, F2, F3, step 1.2, step 4.1, given, base, IH, algebra]

6.1 In the remaining case every $x\in\mathfrak g^f$ is adjoint-nilpotent. Since $\operatorname{ad}f$ and $\operatorname{ad}x$ commute, their product is nilpotent, giving $B(f,x)=0$. Invariance and nondegeneracy give $\operatorname{im}(\operatorname{ad}f)=(\ker\operatorname{ad}f)^\perp=(\mathfrak g^f)^\perp$, so $f\in\operatorname{im}(\operatorname{ad}f)$. Rescaling a preimage gives $h_0$ with $[h_0,f]=-2f$. Write $h_0=s+n$ for its commuting Jordan parts. On each eigenspace of $\operatorname{ad}s$, $\operatorname{ad}h_0$ equals the eigenvalue plus a commuting nilpotent operator. The equation $(\operatorname{ad}h_0+2)f=0$ therefore has no component in any eigenspace other than eigenvalue $-2$, because a nonzero scalar plus a nilpotent operator is invertible. Hence $[s,f]=-2f$. Set $h=s$, which is semisimple. [F3, F4, step 5.1, given, algebra]

7.1 Put $h'=-h$, so $[h',f]=2f$. Jacobi makes $\mathfrak g^f$ an ideal of the Lie algebra $\mathbb Ch'+\mathfrak g^f$. By [F4], the adjoint image of $\mathfrak g^f$ is strictly upper triangular and solvable, and its central kernel is abelian, so $\mathfrak g^f$ is solvable. Its one-dimensional extension is solvable as well. By [F5], this extension acts upper triangularly on $\mathfrak g$. Every $\operatorname{ad}x$ for $x\in\mathfrak g^f$ is nilpotent and thus has zero diagonal in this basis. Therefore $B(h',x)=\operatorname{tr}(\operatorname{ad}h'\operatorname{ad}x)=0$. Nondegeneracy and invariance again yield $h'\in(\mathfrak g^f)^\perp=\operatorname{im}(\operatorname{ad}f)$. [F4, F5, step 6.1, algebra]

8.1 Choose $y$ with $[f,y]=h'$. Decompose $y$ under the diagonalizable $\operatorname{ad}h'$. The element $f$ has weight $2$, so only the weight-$-2$ component contributes to the weight-zero bracket $[f,y]=h'$. Call that component $e$; then $[f,e]=h'$ and $[h',e]=-2e$. As $h=-h'$, these equations give $[h,e]=2e$, $[h,f]=-2f$, and $[e,f]=-h'=h$. This closes the remaining induction case and proves the original assertion for every nilpotent $f$. Repeated $\operatorname{ad}e$ shifts the finite set of $h$-weights upward by $2$, so it is nilpotent as well. [F3, step 5.1, step 6.1, step 7.1, algebra, discharge-induction] ∎


## Proof status

The reductive-centralizer reduction, nilpotent derived-summand inclusion, and finite simple-ideal decomposition are proved locally above from the exact imported root, Jordan, Killing and triangularization interfaces. The induction covers all finite-dimensional complex semisimple algebras, including zero, and yields the unchanged simple-algebra Statement.
