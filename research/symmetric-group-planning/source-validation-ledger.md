# Symmetric-group scaffold source validation ledger

Final authenticated review, 2026-09-07. “Complete” below means that the file
body and terminal matter were checked; “read” names the proof ranges actually
inspected. The seven detailed Terra-high reports are in
`research/symmetric-group-planning-main-review/` and the authenticated task
record is `actual-local-roster.md` there.

## Three counted textbooks

| source | complete-file evidence | proof ranges used |
|---|---|---|
| G. D. James, *The Representation Theory of the Symmetric Groups* (1978) | 161-page PDF; SHA-256 `e339ca5fb1ff9d78874c21c0dd6f7ce609ef94cc805d9921d824424c0712babc`; terminal index checked | §§6, 9, 16, 18–21, 25, plus §§10–12 for modular Specht theory |
| I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed. (1995) | 486-page PDF; SHA-256 `64e242b84d1f3b7864ed28f89a9b331269a28c1ce2a32ce03b4ee692f5974ea7`; bibliography/index through printed p. 475 checked | Ch. I §§3–7 and §9: stable bases, Hall pairing, Cauchy, Frobenius, Kostka, skew Schur and LR |
| P. Webb, *A Course in Finite Group Representation Theory* | complete 294-page author PDF; SHA-256 `3053d04310d379844d0ccac2ae078124492730a116e63343014d276169fb4c24`; all chapters, bibliography and terminal index checked | finite-dimensional algebras, projective covers/Krull--Schmidt, modular/Brauer foundations and exact general interfaces |

Mathas's *Iwahori--Hecke Algebras and Schur Algebras of the Symmetric Group*
is a complete 79-PDF-page/73-printed-page set of lecture notes (SHA-256
`8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0`).
It is a central Hecke/q-Schur source, but is not counted as the third textbook.

## Decisive primary and author-posted sources

| source | complete-file status | exact load-bearing ranges |
|---|---|---|
| Vershik--Okounkov, *A New Approach … II* | complete 31 pages; `bf19d2e52303f20fd66004f6ca2f3b62b9dd46500b7a62410e2c8e7ba2fbc9ac` | §§2,5–6: relative centralizers, GZ/JM generation, content vectors and Young forms |
| Mathas, *Seminormal Forms and Gram Determinants for Cellular Algebras* | complete 29 pages; `a2cd21ced7f35dee695388304c26804ef8ac9c54b661a5d624501c80864698a1` | §§2.15–2.17,3.1–3.7 and Cor. 4.7/4.12; the Soriano appendix is identified separately |
| Brundan, *Modular Branching Rules and the Mullineux Map* | complete 34-page author manuscript; `c9739b545e24407fdb93010f56a539a17331596f6e93b1f352619e91ddfe451c` | Thms. 2.5–2.6, §§3,5, especially §§5.5–5.7 pp. 31–32 for the q-Schur first-level comparison |
| Kleshchev, *On decomposition numbers and branching coefficients…* (1997) | complete 66-page rendered author manuscript; source PS `0bbf3d69ddf20940089045c540e3d516c542118ab06644c5d26c430bedf46558`, rendered PDF `0bb9c690a58c1091a7ba78130da7a584b74beef9736e64eef3c5fa91e1dddef1` | §§2–9, Thms. 8.6,8.8,9.3; §11 and Thm. 1.4 for exact normal-node multiplicities |
| Kleshchev, *Branching Rules … II* (1995) | complete GDZ scan: 50 article pages plus terms page; `6a7a7856d3eb8c8198920c02bdcdd16d8b350f024d39ae96215f072050bc368c` | Thms. 0.4–0.6, pp. 165–166: Hom, head/socle and special semisimple cases kept distinct |
| Kleshchev, *Representation Theory of Symmetric Groups and Related Hecke Algebras* | complete 66 pages; `8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab` | §§2.3–2.4 (2.6–2.8), §2.9 (2.41) for modular JM primary idempotents; §§3.4,7,11 for conventions/checks |
| Brundan--Kleshchev, *Blocks of Cyclotomic Hecke Algebras and Khovanov--Lauda Algebras* | complete 32 pages; `c9a24757f7f3d1e18bac5dba5c22abb4129bf75f4b7e690ad74a3b907da922b0` | full Main Theorem construction: residue idempotents, local intertwiners, all degenerate/nondegenerate formulas and inverse maps |
| Brundan--Kleshchev, *Graded Decomposition Numbers for Cyclotomic Hecke Algebras* | complete 57 pages; `62e4dddfab3caf89b824cc9b3551ca8a287dc3cac266c443f64ab3eef3fa1266` | Prop. 5.5 and Thms. 5.6,5.14: graded Specht branching, standard-Fock class and graded decomposition coefficients |
| Church--Ellenberg--Farb, *FI-modules and stability…* | complete 54 pages; `1ff5dd9de3e3663dfa8ceec86e69c1b97448d02630981b22587994be48746e96` | §2.3 and §§3.1–3.4: tensor closure, Noetherianity, exact stability range, padded irreducible family and Murnaghan proof |
| Briand--Orellana--Rosas, *Stability of the Kronecker Product…* | complete 16 pages; `497b2e2219b85a65067662c6a83aeccb8e440f15332bcb17d3842bcf7010ddb0` | Lemmas 2.1,3.1 and Thm. 3.2: finite nonnegative reduced expansion and exact whole-product threshold; not used as the existence proof |
| Ivanov--Kerov, *Algebra of Conjugacy Classes…* | complete 19-page article/full rendering; streamed original `85424a104255319279875e7464f313d00b0a1fd9dadf78edaf9a9cf6b7b5fcf4` | §§2–6 and §9, Props. 6.1–6.3, Remark 6.4, Thm. 9.1: support-union multiplication and shifted-character algebra isomorphism |
| Ivanov--Olshanski, *Kerov's Central Limit Theorem…* | complete 49 pages; `fc2296c027b3feb0ff6c894f9ab594d35b5d79e489795280ee70315235af1362` | §§2,4–7, Props. 4.5,4.7–4.13,5.1–5.7,6.1–6.4: filtrations, limit shape, Hermite normalization and CLT |

Ariki's original 20-page article was browser-read through §§3–4 and Thm. 4.4,
but the direct endpoint blocked byte streaming and therefore has no invented
hash. It is an independent endpoint check, not the proof supplier: the actual
nondegenerate proof route is QG-8 -> the complete Hecke--KLR isomorphism ->
the complete graded-Specht comparison. Quantum/global-basis/KLR foundational
source validation and the distinct degenerate category-O route are recorded in
the root-owned quantum-group and Kazhdan--Lusztig scaffold source ledgers.

## Excluded or qualified evidence

- The external `agent-roster.md` is not authenticated collaboration evidence.
- A cached Incapsula/error body is not Ariki full text.
- A 404 historical Mathas author URL is not claimed as a current full-text
  endpoint; the cached bytes and bibliographic record are distinguished.
- O'Donovan's Young--Brauer Nakayama proof is retained only as an independently
  checked alternate route; the central dependency is the fully scaffolded
  q-Schur/Jantzen proof.
- Muth's graded skew-Specht theorem is not substituted for the classical
  arbitrary-field James--Peel theorem; the scaffold instead makes the exact
  characteristic-zero skew multiplicity module claim it can prove.
