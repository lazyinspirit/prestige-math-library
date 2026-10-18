# Critical sub-half physical Sobolev stability: actual source/range check

Research only. Question: does the full continuous-P1 or MINI orthogonal mass projector have uniform physical H^s stability for **every** fixed s<1/2 on arbitrary matching shape-regular meshes, without an extra grading threshold? This lane found neither a full-text theorem proving that assertion nor a counterexample disproving it under the actual original dimensions/meshes. In particular, failure of a sufficient weighted criterion is not treated as a necessary obstruction.

## 1. Actual Bank–Yserentant full text retrieved and read

Randolph E. Bank and Harry Yserentant, *On the H1-stability of the L2-projection onto finite element spaces*, Numerische Mathematik 126 (2014), 361–381, DOI 10.1007/s00211-013-0562-4. The actual author manuscript is dated 28 May 2013 and has 19 pp.

Full author source: https://ccom.ucsd.edu/~reb/reports/a114.pdf.gz . Decompressed and saved as `bank-yserentant2014.pdf`, with `.txt`. The author publication page https://ccom.ucsd.edu/~reb/pubs.html links this exact file to the published article.

Actually read introduction and precise mesh-level hypotheses §§1–2; decay-to-weighted-stability proof §§3–4; theorem consequences and extension discussion §§5–6; and the **entire actual counterexample §7**, including characteristic-root calculation. The complete high-order eigenvalue tables and all appendix calculations were not independently certified.

The source imposes levels k(T) such that h(T) is comparable to 2^-k(T) with a fixed comparison ratio, and neighboring elements sharing any vertex differ by at most one level. Its H1 theorem is therefore not an unrestricted arbitrary-shape-regular theorem. The introductory wording “nonuniform but shape regular” must be read with this precise additional hypothesis.

### What its actual counterexample proves—and does not prove

Section 7 is **one dimensional**. It uses intervals I_k of lengths h_k=(1−rho)rho^k accumulating at one endpoint, and the L2 projector onto the associated infinite piecewise-affine space. For a smooth input supported in the first interval, the nontrivial projected tail has nodal values

    u_k=a lambda^k,

where lambda is the decaying characteristic root of

    1+2(1+rho)lambda+rho lambda²=0,
    lambda=−1/2+(3/8)rho+O(rho²) as rho→0.

Hence |lambda|<1. The projected derivative energy over I_k is proportional to (lambda²/rho)^k. H1 regularity fails when lambda²/rho>=1, as the source proves. It is a genuine counterexample to unrestricted H1 stability in that one-dimensional setting.

It is **not** a counterexample below s=1/2. The fractional single-cell scale factor is instead

    lambda^(2k) h_k^(1−2s),

so its geometric ratio is lambda² rho^(1−2s), strictly less than one for every 0<s<1/2. More decisively, the full projected tail has finite total variation:

    sum_k |u_(k+1)−u_k|
      <= |a| |1−lambda| sum_k |lambda|^k < infinity.

It is also bounded. Including the finite first-cell contribution and endpoint jumps, its zero extension is bounded BV. For a bounded BV function w on the line,

    ||w(·+t)−w||2²
      <= 2||w||infinity ||w(·+t)−w||1
      <= 2||w||infinity TV(w)|t|.

The translation formula for the Slobodeckij seminorm then gives finiteness of its **full** H^s norm for 0<s<1/2, including all cross-cell interactions, since integral_0^1 t^(-2s)dt is finite. Thus no missing cross-cell term in a mere scaling heuristic reverses this conclusion. This diagnostic does not prove a general projector bound, uniform in all meshes or normalized data; it establishes that this particular authoritative counterexample does not settle the requested sub-half range.

Its formal single-cell critical exponent is

    s_crit=1/2+log|lambda|/log rho >1/2,

approaching 1/2 from above as rho→0. Consequently citing this H1 counterexample as a reason that some s<1/2, or specifically s>1/4, must fail would be mathematically unjustified. It also does not transfer automatically from one dimension to the original matching simplicial meshes in dimensions two or three, or from continuous P1 to bubble-enriched MINI.

## 2. Actual Diening–Storn–Tscherpel proof has sufficient grading conditions, not a sharp physical-Hs obstruction

Lars Diening, Johannes Storn and Tabea Tscherpel, *On the Sobolev and Lp-Stability of the L2-Projection*, SIAM J. Numer. Anal. 59 (2021), 2571–2607; actual arXiv full text https://arxiv.org/pdf/2008.01801v2, 37 pp. Saved `diening-storn-tscherpel2021.pdf` and `.txt`.

Actually inspected the complete abstract decay setup and main decay proof §2, operator construction and the comparison to Bank–Yserentant in §3, all weighted-stability statements and proof mechanisms §§4.1–4.4, the grading discussion §5, and the introductory account of the one-dimensional counterexample. The separate Crouzeix–Raviart application §6 was not independently certified.

The physical stability results explicitly proved there are Lp and W1,p, via weighted L2 estimates and mesh-size grading. Theorem 4.12 has the sufficient condition

    gamma_rho gamma_h^[d|1/2−1/p|] < gamma_max,

and Theorem 4.13 has

    gamma_rho gamma_h^[1+d|1/2−1/p|] < gamma_max.

The W1,p proof uses the local mesh-size weighted inverse inequality, approximation by Scott–Zhang, and weighted projector stability. This is a rigorous route under the stated condition. The theorem does **not** say that projector stability fails when the inequality is reversed. Its “worst grading” is defined relative to the weighted stability class in the argument, not an independently established counterexample for every physical fractional norm.

No theorem in the inspected full text gives an unrestricted physical H^s bound for every s<1/2; equally, no counterexample there excludes that assertion in the original dimensions. Interpolating a W1,2 theorem available only under a grading condition cannot remove that condition. Conversely, the lack of that sufficient theorem on a particular mesh does not refute a sharper proof using the actual MINI mass structure.

## 3. Crouzeix–Thomée and Steinbach retrieval limits

Located Michel Crouzeix and Vidar Thomée, *The stability in Lp and W1,p of the L2-projection onto finite element function spaces*, Math. Comp. 48 (1987), 521–532, DOI 10.1090/S0025-5718-1987-0878688-2 (also JSTOR DOI 10.2307/2007825).

Its nominal AMS PDF was a two-page connection-verification document, not the paper; the JSTOR full-PDF request also returned a challenge. Those files were removed. No direct theorem, proof or sharp exponent is attributed to this unread original. The descriptions in DST are treated only as DST's literature context, not an independent reading of Crouzeix–Thomée.

Also located Olaf Steinbach, *On the stability of the L2 projection in fractional Sobolev spaces*, Numer. Math. 88 (2001), 367–379, DOI 10.1007/PL00005449. The actual author's publication list was accessible at https://www.numerik.math.tugraz.at/~steinbach/pub.htm and confirms the bibliography, but supplies no full-text link for this article. Springer remained challenge HTML. This source was not read and cannot be asserted to prove the desired unrestricted sub-half theorem.

The newer 2026 Diening–Lingert–Tscherpel source already inspected in this directory states that available higher-dimensional W1,p/Lp projection theorems use grading assumptions; that statement concerns those ranges and does not classify the physical sub-half Hs question as impossible or mathematically open.

## 4. Actual MINI distinction and remaining interface

The full MINI mass projector R_h has an additional exact all-Lp stability mechanism from the owner's bubble condensation, unavailable as a generic conclusion for arbitrary P1 mass matrices. Its matrix decay and the graded helper's small positive Hs interval are valid positive inputs. The actual source counterexample above does not invalidate either, and does not bound that interval from above.

No argument here widens the physical Hs interval beyond s>1/4 for all allowed shape constants. Nor does it identify full R_h stability with constrained P_Zh or with the discrete Stokes fractional scale; those are distinct interfaces. The original instantaneous pressure estimate remains unresolved by this source check. Only research files were written, with no canonical or workflow mutation.
