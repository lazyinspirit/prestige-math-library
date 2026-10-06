---
id: lem-nonaffine-flat-hypersurface-slice
kind: lemma
title: "Fibre-regular hypersurface cuts preserve flatness and produce finite image slices"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-krull-intersection-theorem, lem-ag-local-flatness-regular-parameters, thm-long-exact-tor-sequence-in-the-right-module-variable, thm-finiteness-of-associated-primes, lem-zero-divisor-annihilator-contained-in-associated-prime, lem-finite-prime-avoidance, lem-finite-presentation-image-constructible]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-24.md; immutable carrier: research/frontier-38-owner-30-step5-hash-24-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-24 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "SGA3 V, Lemma 7.2; SGA1 IV, Corollary 5.7, printed p.99"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp5-13oct24.pdf
---

## Statement

Assume the Axiom of Choice. For a flat local homomorphism $(A,\mathfrak m)\to(B,\mathfrak n)$ of Noetherian local rings and $f\in\mathfrak n$, if $f$ acts injectively on $B/\mathfrak mB$, then $f$ is a nonzero divisor on $B$ and $B/fB$ is $A$-flat. Consequently, let $X$ be an affine finite-type $k$-scheme, $Y,Z$ finite-type $k$-schemes, $u:Y\to X$ and $v:Y\to Z$ morphisms, and $z\in v(Y)$ a closed point such that $v$ is flat at every point over $z$. There exists a closed subscheme $F\subset X$ such that $u((u^{-1}F)_z)$ is finite and nonempty and $u^{-1}F\to Z$ remains flat at all its points over $z$.

## Facts & Assumptions

[F1] Krull intersection holds for finite modules over Noetherian local rings; vanishing of first Tor with the residue field implies base flatness for a module finite over the target local algebra. ([[thm-krull-intersection-theorem]], [[lem-ag-local-flatness-regular-parameters]], [[thm-long-exact-tor-sequence-in-the-right-module-variable]])

[F2] Noetherian rings have finitely many associated primes, and zero divisors lie in their union. Finite prime avoidance and constructibility of finite-type images hold. ([[thm-finiteness-of-associated-primes]], [[lem-zero-divisor-annihilator-contained-in-associated-prime]], [[lem-finite-prime-avoidance]], [[lem-finite-presentation-image-constructible]])

## Proof

**Given:** The schemes, maps, and hypotheses in the statement, and AC.

1.1 Flatness identifies $\mathfrak m^jB/\mathfrak m^{j+1}B$ with $(\mathfrak m^j/\mathfrak m^{j+1})\otimes_{A/\mathfrak m}(B/\mathfrak mB)$, by tensoring the inclusions of the ideals of $A$. Multiplication by $f$ is injective on every such graded piece, since it is injective on the second factor and the first is a vector space. If $fb=0$, injectivity first gives $b\in\mathfrak mB$, then successively $b\in\mathfrak m^jB$ for every $j$. Krull intersection in the local ring $B$ gives $b=0$. The exact sequence $0\to B\xrightarrow{f}B\to B/fB\to0$ and $A$-flatness of $B$ identify $\operatorname{Tor}_1^A(A/\mathfrak m,B/fB)$ with the kernel of $f$ on $B/\mathfrak mB$, which is zero. The finite-over-target criterion [F1] proves that $B/fB$ is $A$-flat. No finiteness over $A$ is used. [F1, given, algebra]

2.1 If $u(Y_z)$ is already finite, take $F=X$. Otherwise its image is constructible by applying [F2] on a finite affine cover of $Y_z$, and contains infinitely many closed points: a nonempty locally closed positive-dimensional piece has infinitely many closed points, while a zero-dimensional finite-type scheme has only finitely many points. Here $\kappa(z)/k$ is finite, so $Y_z$ is finite type over $k$. Choose a closed image point $x$ different from the images of the finitely many associated points of $Y_z$. Write $X=\operatorname{Spec}C$ and $\mathfrak p_i$ for their image primes. Since the maximal ideal $\mathfrak m_x$ is not contained in any $\mathfrak p_i$, prime avoidance supplies $h\in\mathfrak m_x\setminus\bigcup_i\mathfrak p_i$. Thus $V(h)$ meets $u(Y_z)$ at $x$ and avoids all associated points after pullback. At every point of the cut over $z$, its defining element is regular in the fibre local ring, and step 1.1 proves flatness of the cut over $Z$. [F1, F2, step 1.1, construct, choose]

3.1 Repeat inside the affine closed subscheme $V(h)$ if its fibre image is still infinite, using the new fibre's associated points. Each cut has nonempty fibre and is proper: its defining element avoids the fibre's associated points, so cannot vanish identically on that fibre. Thus the defining ideals in the original Noetherian affine ring strictly increase at every repetition. The ascending chain condition forces termination. The last image is finite and nonempty, and step 1.1 preserves the required flatness at each stage. AC is inherited from the associated-prime, Krull-intersection and local-flatness suppliers. [F1, F2, step 1.1, step 2.1, algebra] ∎

