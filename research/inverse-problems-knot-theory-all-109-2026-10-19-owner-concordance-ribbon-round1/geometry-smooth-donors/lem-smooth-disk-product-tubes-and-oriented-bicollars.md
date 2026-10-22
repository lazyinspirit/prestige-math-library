---
id: lem-smooth-disk-product-tubes-and-oriented-bicollars
kind: lemma
title: Smooth disk product tubes and oriented bicollars
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, thm-picard-lindelof-local-existence-and-uniqueness, thm-smooth-dependence-of-ode-solutions-on-parameters, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, thm-euclidean-inverse-function-theorem, thm-collar-neighborhood-theorem]
proof_strategy: direct
sources:
  references:
    - title: Julia Collins, On the Concordance Orders of Knots, thesis, printed page 20, proof of Theorem 2.2.9
      url: https://arxiv.org/pdf/1206.0669
---

## Statement

Assume full AC. Let $D$ be a smooth neat properly embedded disk in the standard ball $B^4$, with boundary $K\subset S^3$. There is an ambient product collar of $S^3$ in which $D$ is the product collar of $K$, and there is a smooth embedding $\Psi:D\times D^2_{2\epsilon}\to B^4$, fixed on $D\times\{0\}$, whose intersection with $S^3$ is exactly $\Psi(K\times D^2_{2\epsilon})$. It is a product in these boundary collars and supplies a smooth framing of the quotient normal bundle of $D$.

A compact cooriented smooth embedded hypersurface with boundary in the interior of an oriented smooth manifold has an ambient bicollar. The positive half may be required to follow its prescribed compatible positive transverse field on a closed neighborhood piece. A neat cooriented hypersurface in a manifold with boundary similarly has a boundary-preserving bicollar after matching its pair collars. These statements concern smooth embeddings only.

## Statement references

[[def-axiom-of-choice]]

[[thm-picard-lindelof-local-existence-and-uniqueness]]

[[thm-smooth-dependence-of-ode-solutions-on-parameters]]

[[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]

[[thm-euclidean-inverse-function-theorem]]

[[thm-collar-neighborhood-theorem]]

## Facts & Assumptions

**Given:** The disk or compact hypersurface of the statement. Neat means that the boundary is exactly the intersection with the ambient boundary and the intersection is transverse, with the usual smooth half-space pair charts.

[A1] Full AC is assumed, in particular supplying the countable-choice hypotheses of collar constructions. [[def-axiom-of-choice]]

[F1] Smooth finite-dimensional ODEs have unique local solutions and smooth parameter dependence; linear matrix equations have solutions on a specified compact interval. [[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]], [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]

[F2] An invertible derivative gives a local smooth inverse. The smooth collar theorem is proved by an inward field and its flow. [[thm-euclidean-inverse-function-theorem]], [[thm-collar-neighborhood-theorem]]

## Proof

**Proof technique:** direct.

1.1 First construct a pair collar, rather than assuming a relative tubular theorem. In neat charts at $K$, the boundary coordinate $r\ge0$ and the coordinate along $K$ span $TD$, and the vector $\partial_r$ is inward and tangent to $D$. Cover $K$ by finitely many such charts; cover the remainder of $S^3$ by charts disjoint from $D$. Smooth bumps supported in these charts, normalized by their sum, give an inward field near $S^3$ tangent to $D$ wherever it meets $D$. Its coefficients extend across the boundary in the charts. By [F1] its flow is defined for a common small time for starts on compact $S^3$. The collar proof in [F2] applies: local inverse maps at time zero give a local collar; uniqueness makes it injective, since an inward trajectory cannot meet the boundary at a later positive time. It covers a boundary neighborhood by the local inverse maps. Tangency and uniqueness keep trajectories from $K$ in $D$; the reverse-time local chart argument shows that all points of $D$ in a sufficiently small collar arise this way. Hence the collar identifies the pair with $(S^3,K)\times[0,\eta)$. The same construction works for every compact neat pair in the final assertion. [A1, F1, F2, given, construct]

2.1 Choose a smooth positive metric on $S^3$, put its product with $dt^2$ on the pair collar, and join it to the Euclidean metric farther inside using a smooth cutoff in the collar variable; convex combinations of positive definite matrices remain positive definite. Let $C_x$ be the metric complement of $T_xD$ in $T_xB^4\cong\mathbb R^4$. In disk coordinates the tangent matrix has independent columns, so the metric Gram matrix is invertible; the projection onto $TD$ is given by its inverse Gram matrix. Thus the complementary projection $P(x)$ onto $C_x$ is a smooth idempotent matrix. Near the boundary it is a product projection and $C|_K\subset TS^3|_K$. The quotient normal bundle is identified with $C$ by projection. [step 1.1, construct, algebra]

3.1 Parametrize the disk by the closed standard disk and fix a basis of $\operatorname{im}P(0)$. For $x$ in that disk put $P_x(t)=P(tx)$ and solve $$U_x'(t)=[P_x'(t),P_x(t)]U_x(t),\qquad U_x(0)=I_4\quad(0\le t\le1).$$ This is a linear equation, so [F1] gives a smooth invertible fundamental matrix, smoothly depending on $x$; invertibility also follows by solving the inverse matrix equation and differentiating the product. Differentiating $P_x^2=P_x$ gives $P_x'=P_x'P_x+P_xP_x'$ and $P_xP_x'P_x=0$. Consequently $$P_x'+P_x[P_x',P_x]-[P_x',P_x]P_x=0,$$ and uniqueness gives $P_x(t)U_x(t)=U_x(t)P(0)$. Transporting the two chosen vectors by $U_x(1)$ therefore yields a smooth independent normal frame on the entire disk. The equations are smooth up to the disk boundary: the disk map and its full-rank tangent data extend locally across its boundary, and finitely many coordinate extensions and bumps give extensions on a neighborhood of the closed parameter disk. No bundle-triviality theorem over a contractible base has been assumed. [F1, step 2.1, construct, algebra]

4.1 Make this frame a product at the boundary. The complement bundle in the pair collar is identified with its boundary restriction by the collar derivative. If the frame there is $v(s,t)$, replace it by the transported frame $v(s,\rho(t))$, where $\rho(t)=0$ near $t=0$ and $\rho(t)=t$ near the far edge of a smaller collar. A smooth interpolation with $0\le\rho(t)<\eta$ gives an independent frame everywhere and agrees with the old frame outside that smaller collar. This fixes a boundary-product frame without changing the complement bundle. [step 1.1, step 2.1, step 3.1, construct]

5.1 Construct the tube from this frame. In a metric chart, solve the geodesic equation $x''^k=-\Gamma^k_{ij}(x)x'^ix'^j$ with initial point on $D$ and initial velocity in $C$. Its smooth coefficients, [F1], and compactness of $D$ give existence through time one for all sufficiently small velocities, with smooth dependence. Let $E(x,v)$ be its endpoint. At zero velocity $E(x,0)=x$ and its derivative is $(u,w)\mapsto u+w$: this follows either by differentiating the equation at the constant solution or by its integral equation $x(t)=x(0)+tv+O(|v|^2)$. It is invertible. Near the boundary the metric and frame are products, so these geodesics have constant collar coordinate; in particular the map preserves the ambient boundary and the disk collar. Apply [F2] in ordinary extensions of the charts; restricting back to the half-space gives a local pair diffeomorphism. Compactness gives a uniform small radius on which the derivative remains invertible and the map is globally injective. To verify the last assertion, if no such radius existed, two distinct preimages with velocities tending to zero would have equal endpoints. Compactness gives convergent base points, equal in the limit because $D$ is embedded; both preimages would then lie in one inverse neighborhood at the same zero vector, a contradiction. Restrict to a closed radius $2\epsilon$ inside this neighborhood and use the frame coordinates. The resulting $\Psi$ is the stated embedding, and the product geometry near $K$ and positive distance of the remaining disk from $S^3$ prove its asserted boundary intersection. [F1, F2, step 2.1, step 4.1, construct, algebra]

6.1 For a compact cooriented hypersurface $R$ in the interior, choose a smooth positive transverse vector along $R$. Local half-space embedding charts at $\partial R$ extend its coefficients to the ambient chart; a finite partition of unity gives an ambient field restricting to that vector on $R$. Its flow $\Phi_t$ has derivative $(u,a)\mapsto u+a n$ at $t=0$, invertible because $n$ is transverse. The inverse function theorem on chart extensions and the compact injectivity argument of step 5.1 give an embedding $(x,t)\mapsto\Phi_t(x)$ of $R\times[-\delta,\delta]$. If a compatible positive transverse field was prescribed on a closed neighborhood piece, extend that field first and use bumps equal to one on a smaller prescribed neighborhood; the cone of positive transverse vectors is convex, so combining it with the other local choices remains positive. The resulting flow agrees with the prescribed field there. For a neat hypersurface with ambient boundary use the pair collar of step 1.1, choose the transverse field tangent to the ambient boundary and product in that collar, and repeat the same argument. Its flow preserves the boundary. These are the required oriented bicollars, completing the proof. [A1, F1, F2, step 1.1, step 5.1, construct, algebra] ∎
