---
id: lem-an-invariant-mean-produces-a-reiter-net
kind: lemma
title: An invariant mean produces a Reiter net
status: published
origin: pipeline
dependency_level: 5
proof_strategy: direct
deps:
  - def-reiter-condition-p1
  - lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean
  - lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - def-convolution-on-cc-and-l1-of-a-group
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-compact-space
  - lem-compactness-of-a-subspace-is-ambient
  - def-axiom-of-choice
  - def-amenable-locally-compact-group
  - def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group
  - def-left-haar-integral-and-left-haar-measure
  - def-compactly-supported-convolution-on-a-group
  - thm-compactness-under-continuous-maps
  - lem-translations-preserve-compactly-supported-continuous-functions
axiom_use: Assume AC. It is inherited through the UCB smoothing, norm-approximation, strong-continuity and Cc-density suppliers. The compact-orbit estimate and convolution equivariance add no further choice; no separate dependent-choice assumption is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press, 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, §G.3, closing paragraphs of the proof of Theorem G.3.1 (ii) to (iii), printed p. 455: strong continuity makes the translate orbit compact, followed by smoothing and the Reiter estimate"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter's Property (University of Sydney Honours lecture notes, 11 October 2012)"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf"
      locator: "Slides 17–18, PDF pp. 17–18: compactness of the translated orbit, the convolution identity and the final Reiter (P1) estimate"
verification:
  audited: "2026-10-08"
---

## Statement
Assume AC. Suppose $G$ admits a left-invariant mean on $\mathrm{UCB}(G)$; this holds in particular when $G$ is amenable in the sense of [[def-amenable-locally-compact-group]]. Then $G$ satisfies Reiter's condition (P1) ([[def-reiter-condition-p1]]). Consequently every amenable locally compact group satisfies (P1).
## Facts & Assumptions

**Given:** AC, an LCH group $G$ with fixed left Haar measure $\mu$, and a left-invariant mean on actual bounded uniformly continuous functions $\mathrm{UCB}(G)$.

[A1] AC is assumed in the choice-function form ([[def-axiom-of-choice]]).

[F1] $\mathcal P=\{f\in L^1(G):f\ge0,\ \|f\|_1=1\}$ is convex and $L_x\mathcal P=\mathcal P$ for every $x\in G$; (P1) requires a density with the compact-test defect $\Delta_Q(f)\le\varepsilon$ ([[def-reiter-condition-p1]]).

[F2] $\mathrm{UCB}(G)$ consists of actual bounded continuous functions, is translation invariant, and its class map into complex $L^\infty(G)$ is an isometric embedding ([[def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group]]).

[F3] Amenability supplies a positive complex-linear unital left-invariant mean on complex $L^\infty(G)$ ([[def-amenable-locally-compact-group]]).

[F4] Under AC, a left-invariant mean on $\mathrm{UCB}(G)$ yields a topological invariant mean on $L^\infty(G)$ ([[lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean]]).

[F5] A topological invariant mean on $L^\infty(G)$ yields a net $(g_j)\subseteq\mathcal P$ whose defects $\|h*g_j-g_j\|_1$ tend to zero uniformly for $h$ in every norm-compact subset of $\mathcal P$ ([[lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities]]).

[F6] For each $f\in L^1(G)$, the orbit map $x\mapsto L_xf$ is norm-continuous ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]).

[F7] Compactness is intrinsic to the subspace, and every ambient open cover of a compact subspace has a finite subcover ([[def-compact-space]], [[lem-compactness-of-a-subspace-is-ambient]]).

[F8] A continuous image of a compact space is compact ([[thm-compactness-under-continuous-maps]]).

[F9] Extended $L^1$ convolution is bilinear and satisfies $\|f*g\|_1\le\|f\|_1\|g\|_1$; it agrees with the compact-support convolution on $C_c(G)$ ([[def-convolution-on-cc-and-l1-of-a-group]]).

[F10] Extended convolution preserves probability densities: $f*g\in\mathcal P$ for $f,g\in\mathcal P$ ([[lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean]], Remark).

[F11] Under AC, $C_c(G)$ is dense in $L^1(G)$ for a Radon Haar measure ([[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]).

[F12] Left Haar measure is left invariant and Radon under the repository convention ([[def-left-haar-integral-and-left-haar-measure]]).

[F13] For $u,v\in C_c(G)$, $(u*v)(y)=\int_Gu(z)v(z^{-1}y)\,d\mu(z)$ ([[def-compactly-supported-convolution-on-a-group]]).

[F14] Left translation preserves $C_c(G)$ ([[lem-translations-preserve-compactly-supported-continuous-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [F4], the given mean on $\mathrm{UCB}(G)$ yields a topological invariant mean $\widetilde m$ on $L^\infty(G)$. [A1, F4]

1.2 We first prove left-equivariance of the extended convolution. For $u,v\in C_c(G)$, [F13] and left invariance give, for every $x,y\in G$, $((L_xu)*v)(y)=\int_Gu(x^{-1}z)v(z^{-1}y)\,d\mu(z)=\int_Gu(w)v(w^{-1}x^{-1}y)\,d\mu(w)=(L_x(u*v))(y)$, where $z=xw$. Thus $L_x(u*v)=(L_xu)*v$ in $L^1(G)$. For arbitrary $f,v\in L^1(G)$ choose $u_n,v_n\in C_c(G)$ with $u_n\to f$ and $v_n\to v$ in $L^1$, using [F11]. For fixed $x$, $L_xu_n\in C_c(G)$ by [F14] and $\|L_xu_n-L_xf\|_1=\|u_n-f\|_1$ by [F12]. The convolution bound [F9] then gives $u_n*v_n\to f*v$ and $(L_xu_n)*v_n\to(L_xf)*v$ in $L^1$; passing the compact-support identity to these limits proves $L_x(f*v)=(L_xf)*v$. [A1, F9, F11, F12, F13, F14]

2.1 Apply [F5] to $\widetilde m$ from step 1.1 and fix the resulting net $(g_j)\subseteq\mathcal P$, with defects converging uniformly on norm-compact subsets of $\mathcal P$. [A1, F5, step 1.1]

3.1 Let $Q\subseteq G$ be compact, $\varepsilon>0$, and put $Q_0:=Q\cup\{e\}$. This is compact: for an ambient open cover of $Q_0$, [F7] supplies finitely many members covering $Q$, and one additional member covers $e$; the ambient criterion in [F7] then gives compactness of $Q_0$. The net in step 2.1 shows $\mathcal P$ is nonempty, so fix $f\in\mathcal P$. By [F1], $C:=\{L_xf:x\in Q_0\}\subseteq\mathcal P$; by [F6] the orbit map is continuous, and hence $C$ is norm-compact by [F8]. [A1, F1, F6, F7, F8, step 2.1, construct]

4.1 By [F5] applied to the compact set $C$, choose an index $j$ such that $\|h*g_j-g_j\|_1<\varepsilon/2$ for every $h\in C$. In particular, $\|f*g_j-g_j\|_1<\varepsilon/2$, since $f=L_ef\in C$. Let $g:=f*g_j\in\mathcal P$ by [F10]. For each $x\in Q_0$, step 1.2 gives $L_xg=(L_xf)*g_j$, so $\|L_xg-g\|_1\le\|(L_xf)*g_j-g_j\|_1+\|f*g_j-g_j\|_1<\varepsilon$. Therefore $\Delta_Q(g)\le\varepsilon$, proving (P1) for arbitrary compact $Q$ and positive $\varepsilon$. [F1, F5, F10, step 1.2, step 2.1, step 3.1]

5.1 If $G$ is amenable, let $\nu$ be its mean on $L^\infty(G)$ from [F3] and define $m(\psi):=\nu([\psi])$ for $\psi\in\mathrm{UCB}(G)$. By [F2] this is well-defined, positive, complex-linear and unital; the class map intertwines left translations, so $m$ is left invariant. Applying steps 1.1–4.1 gives (P1). [F2, F3, step 4.1, construct] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.3, Theorem G.3.1 (ii) to (iii), printed p. 455, uses strong continuity to make the translate orbit compact and then applies the uniform approximate-invariance net. Thomas, Lecture 20, slides 17–18 (PDF pp. 17–18), gives the same compact-orbit convolution estimate. Both source proofs take a compact set containing $e$; the proof above handles arbitrary compact tests by adjoining $e$.
