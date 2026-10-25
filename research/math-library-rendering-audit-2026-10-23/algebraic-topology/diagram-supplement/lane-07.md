# Algebraic Topology diagram supplement — lane 07

Reviewed the bound source snapshot and both assigned PNG tiles at original resolution. The current item and snapshot hashes match the assignment's source hash. The local screenshot receipt records no KaTeX errors and no TikZ; its tile hashes match the actual PNGs. I did not consult a live site or external source.

## Missing diagram candidate

**thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence** (snapshot lines 25–44) has no diagram. A compact two-row spectral-sequence schematic leading into the Gysin sequence is warranted as an explanatory aid because it connects the transgression, filtration quotient, edge maps, and long exact sequence. Its absence is not a mathematical defect.

The schematic should show the (E_2) rows (q=0,n), identified with (H^p(B;R)) using the supplied orientation, and the only possible nonzero differential

\[
d_{n+1}:E_{n+1}^{a,n}\longrightarrow E_{n+1}^{a+n+1,0},
\qquad d_{n+1}(u)=e(p).
\]

It should distinguish the bottom-row edge (p^*:H^k(B;R)\to H^k(E;R)) from (p_!:H^k(E;R)\to H^{k-n}(B;R)), which is the quotient to (E_\infty^{k-n,n}) followed by the orientation. The displayed exact-sequence degrees are consistent:

\[
H^{k-n-1}(B;R)\to H^k(B;R)\to H^k(E;R)\to H^{k-n}(B;R)\to H^{k+1}(B;R).
\]

## Mathematical checks

For a cohomological Serre spectral sequence, (d_r) has bidegree ((r,1-r)). Thus the first differential from ((0,n)) that can reach row zero is (d_{n+1}), landing in ((n+1,0)), as stated. Differentials with smaller index have zero targets, and those with larger index have zero endpoints. In total degree (k), the stable bottom term is the cokernel of (H^{k-n-1}(B;R)\xrightarrow{\smile e(p)}H^k(B;R)), and the stable top term is the kernel of (H^{k-n}(B;R)\xrightarrow{\smile e(p)}H^{k+1}(B;R)). The two-piece abutment filtration therefore yields the stated Gysin exact sequence with the correct map degrees.

The bottom edge has the stated (p^*) domain and codomain. The top-row quotient followed by the orientation has the stated (p_!) domain and codomain. Under the written product order (a u), the total-degree Leibniz rule gives (d_{n+1}(a u)=(-1)^{|a|}a\smile e(p)). Multiplying alternate connecting/cup arrows by (-1) removes these unit signs without changing kernels or images. No indexing, edge-map, or sign defect was found.

## Coverage

The JSON records the exact bound source, screenshot receipt and tile hashes, the proposed diagram content, and the checks above. Both screenshot tiles were inspected locally at original resolution.
