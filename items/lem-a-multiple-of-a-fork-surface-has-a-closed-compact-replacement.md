---
id: lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement
kind: lemma
title: A multiple of a fork surface has a closed compact replacement
status: published
origin: pipeline
deps: [def-forks-noodles-and-their-lkb-intersection-pairing, def-lkb-absolute-second-homology-module, thm-long-exact-sequence-of-a-pair-in-singular-homology, def-lkb-two-variable-covering-homomorphism, def-relative-singular-homology, thm-singular-chain-homotopy-formula]
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 2.3 (the Basic Lemma) and its proof, printed pp. 477-479, including Figure 2 and equations (2)-(8)"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Sections 3.3–3.4, printed pp. 7–9: explicit closed surfaces; the relative-exact-sequence Basic Lemma proof used here is Bigelow 2001, section 2.3, pp. 477–479"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full item proof read and accepted exact subsequent delta; item lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement; evidence research/frontier-38-owner-30-reader-16.md, research/frontier-38-owner-30-step5-lkb-resolution-current-carriers/lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement.md, research/frontier-38-owner-30-step5-lkb-resolution-evidence.json, research/frontier-38-owner-30-alpha-batch-16-5a-decisions.json. Original source/coverage limitations retained; no recursive audit of all prerequisites or full bibliography claimed. Restored from completed 2026-10-03 evidence; no new audit or independent audit of local repair claimed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

For every fork $F$ there is a class in $H_2(\widetilde C)$ represented by an
immersed closed surface $\widetilde\Sigma_2(F)$ that agrees with
$(1-q)^2(1+qt)\widetilde\Sigma(F)$ outside a small neighbourhood of the two
tine punctures. Consequently the paired intersection $\langle N,F\rangle$ is
independent of the escape-to-infinity behaviour of the non-compact surfaces
$\widetilde\Sigma(N)$ and $\widetilde\Sigma(F)$.

## Facts & Assumptions

**Given:** a fork $F$ with tine endpoints $p_i,p_j$, its surface $\widetilde\Sigma(F)$ and a noodle $N$ of [[def-forks-noodles-and-their-lkb-intersection-pairing]]; the two-variable covering homomorphism $\Phi$ and the LKB cover.

[F1] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies, for the pair $(\widetilde C,\widetilde U)$, the exact sequence $H_2(\widetilde C)\xrightarrow{j_*}H_2(\widetilde C,\widetilde U) \xrightarrow{\partial}H_1(\widetilde U)$ of $\Lambda$-modules.



[F2] A relative class has a finite chain representative whose boundary is in the relative subspace ([[def-relative-singular-homology]]); finite homotopies give the prism boundary identity ([[thm-singular-chain-homotopy-formula]]).

## Proof

1.1 Let $\nu(p_i),\nu(p_j)\subset D$ be disjoint closed disks with $\nu(p_k)\cap P=\{p_k\}$ for $k=i,j$, and let $$U=\{\{x,y\}\in C: x\in\nu(p_i)\cup\nu(p_j)\ \text{or}\ y\in\nu(p_i)\cup\nu(p_j)\}\subset C.$$ Fix a basepoint $u_0=\{u_1,u_2\}$ with $u_1\in\nu(p_i)$ and $u_2\in\nu(p_j)$, choose a lift $\tilde u_0$ of $u_0$ in $\widetilde C$, and let $\widetilde U$ be the preimage of $U$. The component containing the chosen lift is a covering space, and $\pi_1(\widetilde U,\tilde u_0)$ is the kernel of the restriction of $\Phi$ to $\pi_1(U,u_0)$, viewed inside $\pi_1(U,u_0)$ through the inclusion $U\hookrightarrow C$. The surface $\widetilde\Sigma(F)$ has both tine coordinates in a neighbourhood of $p_i$ or of $p_j$ near its boundary, so it represents a class $[\widetilde\Sigma(F)]\in H_2(\widetilde C,\widetilde U)$. [given, construct]

1.2 Using the arcs of Bigelow 2001 Figure 2, define elements of $\pi_1(U,u_0)$ by $$a_1=\{\gamma_1,u_2\},\qquad a_2=\{u_1,\gamma_2\},\qquad b_1=\{\alpha_1,\beta_1\beta_2\beta_3\}\{\alpha_2\alpha_3,u_1\},\qquad b_2=\{\alpha_1\alpha_2\alpha_3,\beta_1\}\{u_2,\beta_2\beta_3\},$$ where $\gamma_1$ is a loop in $\nu(p_i)\setminus\{p_i\}$ based at $u_1$ enclosing $p_i$ once counterclockwise, $\gamma_2$ is the analogous loop in $\nu(p_j)\setminus\{p_j\}$, and $\alpha_1,\alpha_2,\alpha_3$, $\beta_1,\beta_2,\beta_3$ are the six displayed corridor pieces: $\alpha_1\alpha_2\alpha_3$ runs from $u_1$ to $u_2$ along one shore of the tine neighborhood, and $\beta_1\beta_2\beta_3$ runs from $u_2$ to $u_1$ along the other. The first and last pieces stay inside their endpoint disks; the middle pieces are disjoint corridors outside the punctures. In each braced path pair one coordinate remains in an endpoint disk while the other uses the corridor, so every stage lies in $U$. Their total puncture windings are zero and their mutual half-twist exponents are1, giving $\Phi(b_1)=\Phi(b_2)=t$; also $\Phi(a_1)=\Phi(a_2)=q$. Thus $\Phi(\pi_1(U))=\mathbb Z^2$ and the full preimage $\widetilde U$ is connected. The following relations hold in $\pi_1(U,u_0)$: $$[a_1,a_2]=1,\qquad [a_1,b_1a_1b_1]=1,\qquad [a_2,b_2a_2b_2]=1. \qquad\text{(2,3,4)}$$ The first is immediate because $\gamma_1$ and $\gamma_2$ can be representatives of the two coordinates supported in disjoint disks. For the second, $b_1a_1b_1$ is equal in $\pi_1(U,u_0)$ to $\{u_1,\delta\}$, where $\delta$ is a curve based at $u_2$ which passes counterclockwise around $p_i$ and $u_1$; the third relation follows by the same argument with the roles of the two coordinates interchanged. [given, construct]

2.1 Define elements of $\pi_1(\widetilde U,\tilde u_0)$ by $$a=a_2^{-1}a_1,\qquad b=b_2^{-1}b_1,\qquad c=a_1^{-1}b_1^{-1}a_1b_1,\qquad d=a_2^{-1}b_2^{-1}a_2b_2,$$ where conjugates $x^y=y^{-1}xy$ of elements of $\pi_1(\widetilde U,\tilde u_0)$ by elements $y\in\pi_1(U,u_0)$ again lie in $\pi_1(\widetilde U,\tilde u_0)$. Rewriting the defining words in terms of $a_1,a_2,b_1,b_2$ gives the following relations in $\pi_1(\widetilde U,\tilde u_0)$: $$a^{a_1}=a,\qquad c^{b_1a_1}c=1,\qquad d^{b_2a_2}d=1,\qquad dba^{b_1}=ab^{a_1}c. \qquad\text{(5,6,7,8)}$$ Indeed, the first three translate into relations (2)–(4), and the fourth translates into a trivial identity. [step 1.2, algebra]

3.1 For $x\in\pi_1(\widetilde U,\tilde u_0)$ let $[x]$ denote its image in $H_1(\widetilde U)$. Since conjugation by $y\in\pi_1(U,u_0)$ acts on the kernel of $\Phi$ by the deck transformation $\Phi(y)^{-1}$, one has $[x^y]=\Phi(y)^{-1}[x]$. Applying this to relations (5)–(8) gives $$(q^{-1}-1)[a]=0,\qquad (q^{-1}t^{-1}+1)[c]=0,\qquad (q^{-1}t^{-1}+1)[d]=0,\qquad (q^{-1}-1)[b]=(t^{-1}-1)[a]-[c]+[d].$$ Multiplying the last relation by $(u-1)(uv+1)$ with $u=q^{-1}$, $v=t^{-1}$ annihilates the $[a],[c],[d]$ terms by the first three relations, and the left side is $u^3v\,(1-q)^2(1+qt)[b]$; since $u^3v$ is a unit, $$(1-q)^2(1+qt)[b]=0. \qquad\text{(*)}$$ [step 2.1, algebra]

4.1 The boundary map of the pair sends $[\widetilde\Sigma(F)]$ to $[b]$: the boundary of the lifted surface in $\widetilde U$ is the loop represented by $b$, as read off from the arc decomposition defining $b_1$ and $b_2$. By $(\ast)$, the class $(1-q)^2(1+qt)[\widetilde\Sigma(F)]$ lies in the kernel of $\partial$; exactness of the sequence of [F1] therefore produces $[\widetilde\Sigma_2(F)]\in H_2(\widetilde C)$ with $$j_*[\widetilde\Sigma_2(F)]=(1-q)^2(1+qt)[\widetilde\Sigma(F)] \quad\text{in }H_2(\widetilde C,\widetilde U).$$ Representing this class by an immersed surface in general position with respect to the boundary, one may take $\widetilde\Sigma_2(F)$ to agree with $(1-q)^2(1+qt)\widetilde\Sigma(F)$ outside the open set $\widetilde U$ and to be closed and compact inside $\widetilde C$; this is the claimed class. It may be taken away from the disk boundary: the filled tine images are compact inside the disk, so choose an outer radial collar disjoint from them and from the two puncture disks. Its inward injective compression fixes the fork chain, preserves $U$ because its near-puncture coordinate is fixed, and moves any remaining capping part off the boundary; [F2] keeps the absolute class unchanged. [step 3.1, F1, F2, construct]

5.1 Let $N$ be a noodle and choose the disks $\nu(p_i),\nu(p_j)$ so small that $N\cap(\nu(p_i)\cup\nu(p_j))=\varnothing$; this is possible because $N$ is compact and disjoint from $P$. Then $\widetilde\Sigma(N)$ is disjoint from $\widetilde U$, so all its intersections with $\widetilde\Sigma(F)$ and with $\widetilde\Sigma_2(F)$ occur outside $\widetilde U$, where the two surfaces agree up to the factor $(1-q)^2(1+qt)$. Write $\Delta_F=(1-q)^2(1+qt)=\sum_h n_hh$ as a finite sum of deck monomials. Outside $\widetilde U$ the closed chain equals $\sum_h n_hh\widetilde\Sigma(F)$. Every translated noodle misses $\widetilde U$. Translation invariance of intersection therefore gives $$\sum_g(g\widetilde\Sigma(N)\cdot\widetilde\Sigma_2(F))g=\sum_h n_h\sum_g((h^{-1}g)\widetilde\Sigma(N)\cdot\widetilde\Sigma(F))g=\Delta_F\langle N,F\rangle.$$ The coefficient at a single $g$ is a convolution of the fork intersection counts; multiplication by $\Delta_F$ applies to the full Laurent sum, rather than to each integer count. The left-hand sum is finite without a generic assertion about noncompact translates. The compact replacement has projection with a positive minimum collision distance. Uniform continuity of the compact noodle lets us truncate its triangle by a common positive parameter gap, capturing every possible intersection for every deck translate. That one lifted truncated triangle is compact. Two compact sets in a regular covering meet in only finitely many relative deck positions, by a finite evenly-covered-chart argument. [step 4.1, construct]

6.1 The diagram polynomial is homologically determined. The truncated noodle is a relative cycle in $(\widetilde C,\partial\widetilde C\cup\tilde\nu_\varepsilon)$, not boundary-only homology. Choose $\varepsilon$ small enough to miss the compact replacement and any compact chain bounding a homologous replacement; choose all first-argument chains away from the disk boundary using the collar of step 4.1. The oriented boundary identity for transverse finite chains then makes their intersection counts invariant: the end and boundary terms miss the other argument, and a compact one-chain has total signed boundary zero. The finite prism compares homologous noodle truncations in the same way. Differences between two closing choices come from $H_2(\widetilde U)$ by [F1], and have no intersections with any translated noodle because its projection avoids $U$. For isotopies choose $U$ disjoint from the entire compact noodle trace and truncate the fork ends uniformly; [F2] gives the same relative-chain comparison. Thus the right side of step 5.1 is invariant. The nonzero factor $(1-q)^2(1+qt)$ cancels in the Laurent domain, proving the original finite fork/noodle polynomial is independent of these choices and of escape behavior. No intersection of two classes approaching the same collision end has been asserted. [F1, F2, step 4.1, step 5.1, algebra, construct] ∎
