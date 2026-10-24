---
id: ex-cusp-resolution-and-delta-drop
kind: example
title: "A cusp: one blowup, the normalization and the delta drop"
status: published
origin: pipeline
deps: [thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface, thm-regularization-of-finite-normalization-curve-by-point-blowups, lem-intersection-multiplicity-drop-under-point-blowup, def-intersection-multiplicity-of-closed-subschemes, def-normalization-defect-of-reduced-curve, lem-blowup-multiplicity-euler-characteristic-drop, thm-normalization-reduced-curve-exists-finite, thm-affine-blowup-standard-charts, def-axiom-of-choice, lem-blowup-of-closed-point-of-regular-surface-is-regular, def-strict-normal-crossings-divisor, thm-polynomial-ring-over-a-field-is-a-ufd, lem-point-blowup-of-integral-curve-is-finite, thm-blowup-closed-immersion-transform-universal, cor-dimension-preserved-by-integral-extensions, def-embedding-dimension-and-regular-local-ring, thm-localisation-and-polynomial-extension-of-regular-rings]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-27.md"
      - "research/frontier-38-owner-30-alpha-batch-27-5a.md"
      - "research/frontier-38-owner-30-step5-hash-27-post-5a.json"
    content_sha256: "49f61b7dedd45c87f05501cddd436bfe9fb99e0ecdec338bf4c6f723218b1245"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, tag 0BI7 (Lemma 54.15.3)"
      url: https://stacks.math.columbia.edu/tag/0BI7
      locator: "Lemma 54.15.3 applies to the already regular strict transform and drops its contact with the exceptional curve under subsequent blowup; the first cusp blowup has exceptional contact 2, as computed explicitly here, and is not an instance of the regular-source hypothesis before that blowup; retrieved and read 2026-10-03."
    - title: "The Stacks Project, tag 0BI4 (Lemma 54.15.1)"
      url: https://stacks.math.columbia.edu/tag/0BI4
      locator: "Lemma 54.15.1: a finite sequence of point blowups regularizes a one-dimensional scheme with finite normalization; for the cusp one blowup suffices; retrieved 2026-10-03."
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $k$ be a field of
characteristic different from $2$ and $3$. The cuspidal plane curve
$Z=V(y^2-x^3)$ in $\mathbf A^2_k$ is reduced with a unique singular point at the
origin; it is of finite type over $k$, so its normalization is finite and is the
bijective normalization map $\mathbf A^1_k\to Z$, $t\mapsto(t^2,t^3)$. Blowing
up the origin once makes the strict transform regular: in the chart $y=xt$ the
equation becomes $x^2(t^2-x)$, so the strict transform is $V(t^2-x)$, a regular
curve meeting the exceptional curve $E=V(x)$ at the single point $t=0$ with
intersection multiplicity $2$; the regular strict transform has curve
multiplicity $1$ there. Two further point blowups make the total-transform
support SNC: the second creates a transverse triple point and the third
separates its three tangent directions. The strict transform is precisely the
normalization of $Z$, the multiplicity at the unique point above the origin
drops from $2$ to $1$, and for the projective completion of $Z$ the
normalization defect satisfies $\delta_k=1$ before the blowup and $\delta_k=0$
after it, in agreement with the general multiplicity formula
$r\,m(m-1)/2$ with $r=1$ and $m=2$.

## Facts & Assumptions

**Given:** AC, a field $k$ of characteristic different from $2$ and $3$, the cusp $Z=V(y^2-x^3)\subseteq\mathbf A^2_k$, its projective completion $\bar Z=V(Y^2Z-X^3)\subseteq\mathbb P^2_k$, and the blowup $\pi:S_1\to\mathbf A^2_k$ of the origin.

[F1] Blowups of a regular surface at a closed point stay regular, and the
exceptional curve of a two-dimensional center is a regular curve isomorphic to
$\mathbb P^1$ over the residue field
([[lem-blowup-of-closed-point-of-regular-surface-is-regular]]).

[F2] Strict normal crossings: a reduced curve on a regular surface is SNC if at
every closed point of its support exactly one regular component passes, or exactly two regular
components pass and meet with multiplicity one
([[def-strict-normal-crossings-divisor]]).

[F3] Normalization and defect: the normalization of a reduced finite-type curve
over $k$ is finite and unique up to unique isomorphism; the defect
$\delta_k$ is the dimension of the global sections of the cokernel of
$\mathcal O_C\to\nu_*\mathcal O_{C^{\nu}}$ and is supported
on the non-normal locus
([[def-normalization-defect-of-reduced-curve]],
[[thm-normalization-reduced-curve-exists-finite]]).

[F4] Multiplicity formula: for a reduced curve $C$ on a regular surface proper
over $k$ with an ample invertible sheaf, a closed point $p$ of residue degree $r$ and multiplicity $m$, the
first blowup changes the defect by
$\delta_k(C')=\delta_k(C)-r\binom{m}{2}$, where $C'$ is the strict transform
([[lem-blowup-multiplicity-euler-characteristic-drop]]).

[F5] The polynomial ring $k[t]$ is a unique factorization domain, hence normal,
so $\mathbf A^1_k$ is a normal curve
([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

## Verification

1.1 The parametrization identifies $R=k[x,y]/(y^2-x^3)$ with $k[t^2,t^3]$: modulo the monic relation every polynomial has the unique form $f(x)+yg(x)$, and its image $f(t^2)+t^3g(t^2)$ is zero only when both polynomials vanish, since their monomials have disjoint even and odd exponents. This ring is a domain, finite integral over $k[x]$ by its monic equation in $y$, and therefore has dimension one ([[cor-dimension-preserved-by-integral-extensions]]). At the origin its maximal ideal has the independent images of $x,y$ as a cotangent basis, because the relation has no linear term, so its embedding dimension is two and the point is not regular. Away from the origin, $x$ is invertible and $t=y/x$ gives $R[1/x]=k[t,t^{-1}]$, whose local rings are regular ([[thm-localisation-and-polynomial-extension-of-regular-rings]]). Thus the origin is the unique singular point. [given, algebra]

1.2 In the chart $y=xt$, the strict transform is $Z_1=V(t^2-x)$ and the exceptional curve is $E=V(x)$. The equation is linear in $x$, so this strict transform is regular. In the other chart $x=ys$, the strict-transform equation is $1-ys^3=0$, which forces $y$ and $s$ to be invertible; consequently that entire chart portion lies in the overlap with the first chart and adds no point above the origin. Thus the first chart describes the whole strict transform of the affine cusp. Its intersection with $E$ has coordinate ring $k[t]/(t^2)$, supported at $q=(0,0)$ and of length two, so $m_q(Z_1\cap E)=2$. The curve $Z_1$ is regular and has curve multiplicity one at $q$, whereas the original cusp has multiplicity two because its lowest-degree equation is $y^2$. [given, algebra]

2.1 The strict transform is $\mathbf A^1_k$, parametrized by $t$ with $x=t^2$ and $y=t^3$. The map $k[t^2,t^3]\hookrightarrow k[t]$ is finite, because $1,t$ generate the latter as a module, and is birational, since $t=y/x$ in the fraction field. Its source is normal: by [F5] it is a UFD, and if a reduced fraction $a/b$ in its fraction field is integral, multiplying a monic integral equation by $b^n$ shows that $b$ divides $a^n$; coprimality forces $b$ to be a unit. Hence the finite birational parametrization is the normalization by [F3]. It is bijective on scheme points: it is an isomorphism where $x\ne0$, and the fibre over the origin has support only $t=0$; there are no other points with $x=0$ on the cusp. This proves the claimed affine normalization and curve-multiplicity drop. [F3, F5, step 1.2, algebra]

2.2 The contact of $Z_1$ with $E$ has multiplicity $2$, so the support is not yet SNC by [F2]. Blow up the point $q$ in the chart of step 1.2, writing $x=tu$: the strict transform of $Z_1=V(t^2-x)$ becomes $V(t^2-tu)=V(t(t-u))$, with strict transform $V(t-u)$; the strict transform of $E=V(x)$ becomes $V(u)$; and the new exceptional curve is $V(t)$. These are three distinct lines through the origin, meeting pairwise only there with multiplicity $1$ (their three tangent directions are distinct): a transverse triple point. [F2, step 1.2, algebra]

3.1 Blow up that triple point. Each of the three lines is regular there, and pairwise they meet with multiplicity $1$, so the strict transform of each meets the new exceptional curve in its own point with multiplicity $1$ and the three strict transforms become pairwise disjoint over the blown-up point. The resulting support has regular components, and at every closed point at most two components pass, meeting transversally; hence it is a strict normal crossings divisor by [F2], reached after three point blowups in total. [F1, F2, step 2.2]

3.2 The projective cubic $\bar Z=V(Y^2Z-X^3)$ is regular away from its cusp. On the affine chart $Z=1$ outside the origin, $x$ is invertible and $t=y/x$ identifies the curve with $\operatorname{Spec}k[t,t^{-1}]$. The only point at infinity is $[0:1:0]$; on the chart $Y=1$ its equation is $v-u^3=0$, whose coordinate ring is $k[u]$. Thus the defect is supported only at the cusp and is the module $k[t]/k[t^2,t^3]$, with basis the class of $t$. By [F3], its global section space has dimension one, so $\delta_k(\bar Z)=1$. The projective strict transform after the first blowup is regular at the cusp by step 1.2 and is unchanged elsewhere. Its map to $\bar Z$ is the intrinsic point blowup ([[thm-blowup-closed-immersion-transform-universal]]), hence finite by [[lem-point-blowup-of-integral-curve-is-finite]]; it is birational and normal, so it is the normalization of $\bar Z$ and has defect zero. Formula [F4] applies on $\mathbb P^2_k$, a regular proper surface with ample $\mathcal O(1)$, at the $k$-rational cusp with residue degree $r=1$ and multiplicity $m=2$. It gives $\delta_k(\bar Z')=1-1\binom{2}{2}=0$, agreeing with the direct calculation. [F3, F4, step 1.2, step 2.1, algebra]

4.1 Collecting: one point blowup makes the strict transform the regular normalization of the cusp and drops the multiplicity at the point over the origin from $2$ to $1$; three point blowups make the total-transform support SNC. The example therefore realizes the regularization theorem after one step and the embedded SNC conclusion after finitely many, with the defect drop $\delta_k=1\to0$ confirming the formula $r\,m(m-1)/2=1$. [F1, step 1.2, step 3.1, step 3.2] ∎
