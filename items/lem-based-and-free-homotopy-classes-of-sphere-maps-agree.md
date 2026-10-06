---
id: lem-based-and-free-homotopy-classes-of-sphere-maps-agree
kind: lemma
title: "Based and free homotopy classes of maps between spheres agree"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
  - thm-heine-borel-r
  - thm-heine-cantor-metric
  - prop-cubical-and-spherical-models-of-higher-homotopy-agree
  - def-higher-homotopy-group-by-based-cubes
  - thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one
  - lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes
  - def-homotopy-relative-and-path-homotopy
  - def-euclidean-spheres-and-closed-balls
  - lem-straight-line-homotopies-are-continuous
  - cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lemma 4.16 and Figure 13, printed pp.32-33"
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter 9, section 4, printed p.67"
---

## Statement

For $n,k\ge1$ the forgetful map $\pi_n(S^k)\to[S^n,S^k]$ from based to free homotopy classes is bijective. The spherical model of $\pi_n$ is identified with its cubical model by [[prop-cubical-and-spherical-models-of-higher-homotopy-agree]].

## Facts & Assumptions

**Given:** Unit spheres $S^n,S^k$ with fixed basepoints, $n,k\ge1$.

[F1] Orthogonal matrices form a group; determinants have modulus one ([[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]). Plane rotations have determinant one and can be continuously varied from the identity.

[F2] Homotopies are continuous maps on the product, and a based homotopy fixes the basepoint ([[def-homotopy-relative-and-path-homotopy]]).

[F4] The interval $I$ is compact by [[thm-heine-borel-r]], and a continuous map on a compact metric domain is uniformly continuous by [[thm-heine-cantor-metric]].

[F3] The spherical and cubical based homotopy models agree ([[prop-cubical-and-spherical-models-of-higher-homotopy-agree]]).

## Proof

1.1 A rotation in a plane containing $f(*)$ and the target basepoint takes $f(*)$ to that basepoint and is joined to the identity by varying its angle. If the two points coincide use the identity, and if antipodal choose any perpendicular unit vector, available since $k+1\ge2$. Postcomposition gives a free homotopy from $f$ to a based map. This proves surjectivity. [F1, F2, given, construct]

1.2 For unit vectors $a,b$ with $a\cdot b>-1$, put $K=ba^T-ab^T$ and $Q(a,b)=I+K+K^2/(1+a\cdot b)$. On the plane spanned by $a,b$, this is the rotation taking $a$ to $b$; on its orthogonal complement it is the identity. Direct multiplication gives $Q(a,b)a=b$ and $Q(a,b)^TQ(a,b)=I$; its determinant is one and $Q(a,a)=I$. The formula is continuous even at $a=b$. For a continuous path $p:I\to S^k$, choose a finite subdivision so that $p(t)\cdot p(t_j)>-1$ on each subinterval, using uniform continuity. Set $P_0=I$ and inductively $P_t=Q(p(t_j),p(t))P_{t_j}$. Then $P_t$ is continuous in $SO(k+1)$ and $P_t p(0)=p(t)$. [F1, F4, construct, algebra]

2.1 Suppose based $f_0,f_1$ are freely homotopic by $H$. Apply step 1.2 to $p(t)=H(*,t)$ and define $\widehat H(x,t)=P_t^{-1}H(x,t)$. This is a based homotopy from $f_0$ to $P_1^{-1}f_1$. Since $p(0)=p(1)=*$, the matrix $P_1$ fixes the basepoint vector and restricts to an element of $SO(k)$ on its perpendicular subspace. Every element of $SO(k)$ is joined to the identity by plane rotations: successively rotate its first column to the first coordinate vector, then its second column within the perpendicular complement, continuing until the final one-dimensional block, which is $+1$ because the determinant is one. At each stage an antipodal column is handled by a rotation through $\pi$ in a two-plane; for $k=1$ the group is already the identity. Reversing the finite sequence and varying the angles gives the required path in the stabilizer of $*$. Postcomposing $f_1$ with that path joins $P_1^{-1}f_1$ to $f_1$ through based maps. Concatenation with $\widehat H$ proves injectivity. [F1, F2, step 1.2, construct]

3.1 Surjectivity and injectivity prove the assertion, including $n=k=1$, where the final stabilizer is trivial. All selections are finite. Via [F3] this is the stated bijection for the cubical group $\pi_n(S^k)$. [F3, step 1.1, step 2.1] ∎
