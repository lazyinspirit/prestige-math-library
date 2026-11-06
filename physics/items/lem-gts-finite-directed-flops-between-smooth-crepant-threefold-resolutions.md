---
id: lem-gts-finite-directed-flops-between-smooth-crepant-threefold-resolutions
kind: lemma
title: Finite directed flops between smooth crepant threefold resolutions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- lem-gts-curve-nef-ample-perturbation-by-nakai-construction
- lem-gts-log-adjoint-vanishing-on-snc-pairs
- lem-gts-nef-big-cy-threefold-semiampleness
- lem-gts-projective-cy-threefold-flop-from-perverse-point-quotients
- thm-principalization-of-ideals
- thm-resolution-of-singularities-in-characteristic-zero
- thm-serre-vanishing
- thm-proper-pushforward-coherent
- lem-projective-regular-local-base-coherent-duality-by-embedding
- thm-hodge-index-theorem-for-smooth-projective-surfaces
- lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex
- thm-proper-quasi-finite-is-finite
- lem-ample-pullback-finite-morphism
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-curve-nef-ample-perturbation-by-nakai-construction: mathematical-premise
  lem-gts-log-adjoint-vanishing-on-snc-pairs: mathematical-premise
  lem-gts-nef-big-cy-threefold-semiampleness: mathematical-premise
  lem-gts-projective-cy-threefold-flop-from-perverse-point-quotients: mathematical-premise
  thm-principalization-of-ideals: mathematical-premise
  thm-resolution-of-singularities-in-characteristic-zero: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  lem-projective-regular-local-base-coherent-duality-by-embedding: mathematical-premise
  thm-hodge-index-theorem-for-smooth-projective-surfaces: mathematical-premise
  lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex: mathematical-premise
  thm-proper-quasi-finite-is-finite: mathematical-premise
  lem-ample-pullback-finite-morphism: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: János Kollár, Flops
    url: https://doi.org/10.1017/S0027763000001240
    locator: §§3–4 (printed pp.18–28, PDF pp.4–14), especially Theorem3.5 andTheorem4.9; textual arguments read.
      Singular-configuration diagrams at the end of§4 are not used in the local proof. Directed termination and
      contraction existence are reconstructed here.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 3
---

## Statement

Assume AC. Let $X$ be an integral normal projective Gorenstein complex threefold. Let $f:Y\to X$ and $f':Y'\to X$ be projective crepant resolutions by smooth connected projective threefolds with trivial canonical line. Then the marked birational map $Y\dashrightarrow Y'$ over $X$ factors into finitely many projective elementary small crepant flops over $X$, with EVERY intermediate threefold smooth and projective and with trivial canonical line. Each step can be the distinguished perverse-point model in the supplier below and hence carries its supplied derived equivalence. The original base $X$ need not be terminal. The conclusion applies, in particular, to any two such resolutions of the Gorenstein quotient threefold in the specified orbifolding construction; it is not restricted to conifold contractions.

## Facts & Assumptions

**Given:** The exact resolutions and crepancy identifications in the Statement. All markings use their common rational function field over $X$.

[F1] [[lem-gts-curve-nef-ample-perturbation-by-nakai-construction]] proves curve-nef plus positive ample rational perturbation is ample, with its actual numerical criterion. [[lem-gts-nef-big-cy-threefold-semiampleness]] proves that a nef and big Cartier divisor on a smooth projective complex threefold with trivial canonical line has a generated positive multiple. Nefness means nonnegative degree on every integral curve.

[F2] [[lem-gts-log-adjoint-vanishing-on-snc-pairs]] includes $H^i(V,K_V+L)=0$ for $i>0$ and nef big Cartier $L$ on smooth projective complex $V$. It is used to prove rationality/CM of the newly contracted base, rather than assuming that Cartier canonical implies Cohen–Macaulay.

[F3] [[lem-gts-projective-cy-threefold-flop-from-perverse-point-quotients]]: for an elementary small projective crepant contraction $V\to Z$ from smooth connected projective CY3 to normal projective terminal Gorenstein $Z$, its distinguished perverse-point model $W\to Z$ is smooth projective small crepant and gives a full derived equivalence. For EVERY Cartier $B$ on $W$, if $-B$ is nef over $Z$, its strict transform $B_V$ is nef over $Z$. This precise nef-transform property, not an assumed flop-factorization theorem, is used below.

[F4] [[thm-principalization-of-ideals]] and [[thm-resolution-of-singularities-in-characteristic-zero]] provide regular-center SNC principalization and smooth projective dominating models in characteristic zero. [[thm-serre-vanishing]] and [[thm-proper-pushforward-coherent]] supply finite coherent higher images and eventual vanishing after ample twisting. [[lem-projective-regular-local-base-coherent-duality-by-embedding]] applies with regular local base $\mathbb C$ of dimension zero and constructs canonical dualizing complexes and residue pairings for all projective complex schemes.

[F5] [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] gives negative definiteness on the orthogonal complement of a positive-square class. [[lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex]] makes $H^2(S,\mathbb C)$ finite dimensional for a smooth projective surface $S$. Divisor intersection is its Chern-class cup pairing: choose a meromorphic section, represent its divisor by the Thom class on transverse discs, and patch the angular differential; its curvature representative gives precisely $c_1$, and transverse intersections give the cup integral. [[thm-proper-quasi-finite-is-finite]] and [[lem-ample-pullback-finite-morphism]] supply the finite-morphism ampleness step. AC is [[def-axiom-of-choice]].

## Proof

**Given:** F1–F5. A small morphism has no exceptional divisors. All divisors used numerically are rational Cartier; denominators are cleared when invoking a line-bundle result.

1.1 The birational map is an isomorphism in codimension one. On a common smooth projective resolution with maps $p,q$ to $Y,Y'$, crepancy gives $p^*K_Y=q^*K_{Y'}$ using the same rational canonical form from $X$. Thus $K_V-p^*K_Y=K_V-q^*K_{Y'}$. Over a smooth variety the positive support of this relative canonical divisor is exactly the exceptional prime divisors: regular-center blowups give coefficient $\operatorname{codim}C-1>0$, and F4 dominates any specified divisorial model by such principalization. Consequently a divisor is exceptional on one side precisely when it is on the other. The common open has complement of dimension at most one. Choose once a prime reduced member $D'$ of a sufficiently high very ample system on $Y'$ and use its strict transform $D$ on EVERY later small model. This fixed reduced divisor is never replaced in the termination argument. [given, F4, construct]

2.1 Consider a current smooth projective model $V$ with small marking to $Y'$. The complete section systems of $D$ and $D'$ identify in every power by normality and the common codimension-one open. Their transformed base locus on $V$ is contained in its finitely many indeterminacy curves and points. If a curve is not contained in this base locus, some effective member meets it properly, so its $D$-degree is nonnegative. Thus all $D$-negative curves lie in a finite list. Fix a very ample $H_X$ on $X$. For sufficiently large $n$, the TEMPORARY class $F=D+n f_V^*H_X$ is nonnegative on every nonvertical curve in that finite list. Product sections show its base locus is contained in the original one, so these are all its possible negative curves. Its remaining negative curves are exactly the $D$-negative vertical curves. This temporary addition does not change the fixed $D$ or its degree on any vertical curve. [given, F1, step 1.1, construct]

2.2 We prove termination for the fixed prime reduced $D$. Principalize its ideal on the initial smooth $Y$. For a sufficiently small fixed rational $\epsilon>0$, its SNC transform has one positive boundary coefficient $\epsilon$ on the strict transform of $D$, and negative coefficients on all exceptional divisors: the latter discrepancies were positive integers at $\epsilon=0$. A blowup of a regular center of codimension $c$ in an SNC boundary $\sum b_iB_i$ has new discrepancy $c-1-\sum_{C\subset B_i}b_i$. Since the sole positive coefficient is $\epsilon$, every newly extracted exceptional valuation has discrepancy at least $1-\epsilon$. Any prescribed divisorial valuation appears on a regular-center model dominating this one, by principalizing the ideal of a projective graph model carrying it. Hence only finitely many exceptional valuations have discrepancy $<1-\epsilon$, and every exceptional discrepancy is bounded below by one fixed $\delta>0$, the minimum of $1-\epsilon$ and the finitely many positive exceptional discrepancies on the chosen model. [F4, step 1.1, algebra]

3.1 If $D$ is not nef over $X$, choose an ample rational $H$ on $V$ avoiding equal ratios $-D\cdot C/(H\cdot C)$ for nonproportional numerical classes among the finitely many negative vertical curves. This excludes finitely many proper rational hyperplanes in the open ample cone. Put $\lambda=\max(-F\cdot C/(H\cdot C))$ over its negative curves and $L=F+\lambda H$. Then $\lambda>0$ is rational, $L$ has nonnegative degree on EVERY curve, and its zero curves are all vertical and numerically proportional. It is big: $F$ is effective and $\lambda H$ ample, so a fixed effective section times the sections of a positive ample multiple supplies cubic section growth. F1 makes a multiple of $L$ generated. Its complete-system morphism and Stein factorization give a birational projective contraction $g:V\to Z$. Bigness makes its image three-dimensional; the Stein function field is that of $V$, so it is birational. Its contracted curves are exactly the finite $L$-zero list, hence it is small and elementary. Connected positive-dimensional fibres are unions of those vertical curves, so $f_V$ is constant on them. Since $g_*\mathcal O_V=\mathcal O_Z$, proper descent of functions gives $Z\to X$ and the contraction is over $X$. This constructs a projective directed contraction without a cone theorem. [F1, step 2.1, construct]

4.1 Its base is terminal and Gorenstein, with only isolated singularities. Smallness extends the nowhere-zero canonical form and its inverse across the normal $Z$ in codimension at least two, making its reflexive canonical sheaf $\mathcal O_Z$ and $K_V=g^*K_Z$. Any exceptional divisorial valuation over $Z$ has a codimension-at-least-two center on smooth $V$, since $g$ contracts no divisor; its discrepancy is therefore positive by F4. The contraction is an isomorphism away from its finitely many contracted curves and point-images. For the CM assertion choose ample Cartier $A_Z$. Its pullback is nef and big by birationality. F2 gives $H^i(V,\mathcal O_V(mg^*A_Z))=0$ for $i>0,m>0$. For large $m$, Leray, projection formula and F4 identify these groups with $H^0(Z,R^ig_*\mathcal O_V\otimes A_Z^m)$, since all higher cohomology of the finitely many coherent higher images vanishes. Therefore $R^ig_*\mathcal O_V=0$ for $i>0$, while normality gives $g_*\mathcal O_V=\mathcal O_Z$. [F2, F4, step 3.1, algebra]

5.1 To obtain the exact sheaf-level dualizing conclusion, use F4 over $\mathbb C$ for both projective schemes. Embed the graph of $g$ into $Z$ times projective space; closed-immersion evaluation followed by projective residue trace gives a natural map $Rg_*\omega_V[3]\to D_Z$. Its pairing against every perfect twist $A_Z^{-m}$ is the dual of $R\Gamma(Z,A_Z^{-m})\to R\Gamma(V,g^*A_Z^{-m})$, by the explicit embedding pairings in F4. This is an isomorphism by step 4.1. Thus the trace is an isomorphism after derived global sections of EVERY ample twist. Its bounded coherent cone is zero: for a sufficiently large twist Serre vanishing detects the highest nonzero cohomology sheaf in global sections. Consequently $D_Z=Rg_*\omega_V[3]=\mathcal O_Z[3]$. This proves CM and Gorenstein, rather than inferring them from Cartier canonical alone. The exact hypotheses of F3 now hold. [F2, F3, F4, step 4.1, construct]

6.1 Apply F3 to obtain smooth projective small crepant $W\to Z$. Strict transform identifies Cartier divisor groups on $V,W$. It identifies their RELATIVE numerical kernels as follows. On the normalized graph $T$, with maps $p,q$, put $E=p^*B_V-q^*B_W$ for $B_V$ numerically trivial over $Z$. It is $q$-exceptional and $q$-numerically trivial, since a $q$-contracted curve projects to a curve or point in a $V\to Z$ fibre. The graph is the normalized blowup of the codimension-at-least-two base ideal of a projective embedding of $V$ over $Z$. Its tautological ideal is $\mathcal O_T(-J)$ with $J$ effective Cartier, positive on EVERY exceptional prime divisor, and $-J$ relatively ample. If $E$ has a positive coefficient, choose $a=\max e_j/j_j>0$. Then $E-aJ\leq0$ and one exceptional component $T_j$ has coefficient zero. Choose a contracted curve in a general fibre inside that component, not contained in the other components. It has $E\cdot C=aJ\cdot C+(E-aJ)\cdot C<0$, contradiction. The same argument for $-E$ gives $E=0$. Lifting every $W$-vertical curve to $T$ now makes $B_W$ numerically trivial. The converse is symmetric. Hence $N^1(V/Z)\cong N^1(W/Z)$ and both have rank one. This uses actual graph geometry, not an assertion that fibrewise numerically trivial line bundles descend. [F3, step 3.1, step 5.1, construct]

7.1 Let $D_W$ be the transform of the FIXED $D$. It cannot be nonpositive on the unique vertical ray of $W$, for then $-D_W$ would be nef and F3 would make $D$ nef on $V$ over $Z$, contrary to its negative degree on the contracted curves. Thus $D_W$ has positive degree on every contracted integral curve. Its negative curves are in the finite base-curve list of its ample marking to $Y'$, as in step 2.1. Add $n g_W^*A_Z$ with $A_Z$ sufficiently ample and $n$ large, to remove all negative nonvertical curves; vertical degrees were already positive. The resulting divisor $B=D_W+n g_W^*A_Z$ is globally nef and big (the pullback of an ample divisor by a birational morphism is big and $D_W$ is effective). By F1 a multiple gives a morphism $h$. The proper map $(h,g_W):W\to\mathbb P^s\times Z$ is quasi-finite: a positive-dimensional fibre would contain an integral curve vertical over $Z$ on which $B$ has degree zero. It is therefore finite by F5. The finite pullback of $\mathcal O(1)$ is ample over every affine open of $Z$, so $B$, and hence $D_W$, is relatively ample. On the old side the construction gives $L=g^*A_0$ for a rational ample class on its Stein target, and $-D=\lambda H+g^*(nH_X-A_0)$ with $\lambda>0$, so $-D$ is relatively ample directly. No cohomology-and-base-change lifting on a possibly nonflat fibre has been assumed. Thus $V\dashrightarrow W$ is the projective elementary $D$-flop. The temporary $n f_V^*H_X$ descends from $Z$, so it changes none of these relative assertions. F3 supplies the derived equivalence and preserves smoothness, projectivity and the trivial canonical line. [F3, step 2.1, step 3.1, step 6.1, construct]

8.1 For an actual directed flop $V\to Z\leftarrow W$, choose $rD_W$ relatively generated and regard its sections on $V$ by the codimension-one identification. Their base ideal $I$ vanishes exactly on the old exceptional locus: all sections vanish on the negative-degree old curves, and outside them the two models coincide. On a common principalization its fixed divisor gives $p^*(rD)=q^*(rD_W)+F_I$, with $F_I=\operatorname{div}(I\mathcal O)\geq0$. Crepancy therefore gives $a(W,\epsilon D_W;v)-a(V,\epsilon D;v)=(\epsilon/r)\operatorname{ord}_v(I)\geq0$, STRICT if the old center is in the exceptional locus. All models have the same nonexceptional divisorial valuations, so the exceptional counting set is unchanged. The integer
$$b(V,\epsilon D)=\sum_{j\geq1}\#\{v\text{ exceptional}:a(V,\epsilon D;v)<1-j\epsilon\}$$
is finite by step 2.2, and cannot increase. If a new exceptional curve has generic multiplicity $m>0$ in $D_W$, blowing up its generic smooth curve has new discrepancy $1-m\epsilon$, strictly larger than its old discrepancy. It leaves the threshold count $j=m$, so $b$ strictly decreases. The same lower bound $\delta$ persists, and the same fixed finite sum works throughout. [F4, step 7.1, step 2.2, algebra]

9.1 After finitely many such decreases every remaining flop has NO new exceptional curve contained in its transformed $D$. The old exceptional curves are contained in $D$ since their $D$-degrees are negative. The induced map on normalized divisor surfaces is then a proper birational morphism contracting a curve. Resolve its graph: any curve in a fibre over the old normalization maps into the new exceptional locus; if its image were a curve it would be contained in the new divisor, which is excluded. Thus the other projection is constant on these fibres and descends by normality and proper birational pushforward $\mathcal O=\mathcal O$. A fixed smooth projective resolution $S$ of the first normalized divisor dominates every subsequent one. At each nontrivial contraction a further curve class on $S$ becomes exceptional. For any such surface morphism the exceptional curves have a negative-definite independent intersection matrix: they are orthogonal to pullback of an ample positive-square class, so F5 applies; a relation with disjoint positive and negative parts would have nonnegative self-intersection, contradiction. Their number is bounded by finite $\dim H^2(S,\mathbb C)$ in F5. There can therefore be only finitely many further contractions. The sequence of directed flops terminates. [F4, F5, step 8.1, construct]

10.1 At its end the fixed $D_t$ is nef over $X$. Repeat the temporary addition of step 2.1 to make $F_t=D_t+n f_t^*H_X$ globally nef. It is big: its section ring is the same as that of the ample $D'+n f'^*H_X$ on $Y'$, by normality and the fixed codimension-one marking. F1 makes a multiple generated and its relative complete system gives a birational morphism to the Proj of that ring, namely $Y'$, with the prescribed rational marking. It is small because the marking is an isomorphism in codimension one. A projective small birational morphism to smooth $Y'$ is an isomorphism: push a relatively ample Cartier divisor down to a Weil divisor; smoothness makes it Cartier, and its pullback differs by no exceptional divisor. Its degree on a contracted curve would therefore be zero, contradicting relative ampleness. This identifies the final model with the GIVEN $Y'$. The construction has produced finitely many smooth projective elementary small crepant flops over the original possibly nonterminal $X$, with the supplied derived equivalence at each step, exactly as claimed. [F1, F3, step 2.1, step 9.1, construct] ∎

## Remarks

The finite directed argument uses no general MMP termination theorem. The two substantive existence roots are explicitly supplied by F1–F3: numerical ampleness and nef-big adjoint/semiample construction, and the actual perverse-point moduli model with its full nef-transform property. Neither a named minimal-model theorem nor a terminal-Gorenstein cDV classification is a premise. The quotient application retains its arbitrary chosen smooth projective crepant resolution.
